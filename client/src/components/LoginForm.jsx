import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import HomeLoggedIn from "../components/admin/NavbarAdminLoggedIn";
import { Navigate } from "react-router";

const Container = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.div`
  display: block;
  padding: 20px;
  font-size: 25pt;
  color: black;
  text-align: center;
  align-content: center;
  justify-content: center;
`;

const InputContainer = styled.div`
  padding: 5px;
  text-align: center;
  align-content: center;
  justify-content: center;
`;

const StyledLabelUserPassword = styled.div`
  font-weight: 300;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const StlyedButton = styled.button`
  border: solid 0.2px #fc5185;
  box-shadow: 1px 1px 1px 0.5px rgba(0, 0, 0, 0.1);
  color: black;
  width: 80px;
  transition: all 0.5s ease;
  :hover {
    border-width: medium;
    background-color: #fffaee;
    color: black;
    cursor: pointer;
  }
`;

const LoginForm = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [listOfUsers, setListOfUsers] = useState();

  useEffect(() => {
    Axios.get("http://localhost:4000/user")
      .then((response) => {
        setListOfUsers(response.data);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);

  const errors = {
    uname: "Login não encontrado",
    pass: "Senha incorreta",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = listOfUsers.find((user) => user.login === uname.value);
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // login not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <StyledLabelUserPassword>Usuário </StyledLabelUserPassword>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </InputContainer>
        <InputContainer>
          <StyledLabelUserPassword>Senha </StyledLabelUserPassword>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </InputContainer>
        <ButtonContainer>
          <StlyedButton>Entrar</StlyedButton>
        </ButtonContainer>
      </form>
    </div>
  );

  return (
    <>
      <Container>
        <StyledTitle>Login</StyledTitle>
        {isSubmitted ? <Navigate to="/admin/home/logged" /> : renderForm}
      </Container>
    </>
  );
};

export default LoginForm;
