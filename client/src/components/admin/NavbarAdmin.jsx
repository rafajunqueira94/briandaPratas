import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 100px;
  background-color: red;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  background-color: white;
`;

const StyledA = styled.a`
  display: flex;
  color: black;
  float: left;
  padding: 0.2rem;
  text-decoration: none;
  font-size: 17px;
  align-items: center;
  justify-content: space-between;
  :hover {
    border-bottom: rgba(230, 50, 218, 0.5) solid 2px;
    cursor: pointer;
    opacity: 0.6;
  }
  :active {
    background-color: whitesmoke;
  }
`;

const Center = styled.div`
  flex: 7;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Left = styled.div`
  margin: 0 70px 0 70px;
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  display: flex;
  height: 40px;
  width: 125px;
  font-size: 1em;
  /* margin: 0.5em; */
  padding: 0.2em;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  background-color: white;
  box-shadow: 0.15em 0.15em 0.25em rgba(0, 0, 0, 0.4);
  border: 0.05px solid black;
  :hover {
    width: 130px;
    height: 45px;
    opacity: 0.7;
    font-size: 1.1em;
    transition: width ease-in-out;
  }
`;

const NavbarAdminHome = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <StyledButton">
            <MenuIcon />
            Categorias
          </StyledButton> */}
        </Left>
        <Center>
          <StyledA>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/Admin/Product"
            >
              Produtos
            </Link>
          </StyledA>
          <StyledA>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/Admin/Customer"
            >
              Clientes
            </Link>
          </StyledA>
          <StyledA>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/Admin/User"
            >
              Usuários
            </Link>
          </StyledA>
        </Center>
      </Wrapper>
    </Container>
  );
};

export default NavbarAdminHome;
