import React from "react";
import Header from "../../../components/Header";
import NavbarAdminHome from "../../../components/admin/NavbarAdmin";
import Footer from "../../../components/Footer";
import styled from "styled-components";
import UserGrid from "../../../components/admin/GridUser";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  font-size: 35pt;
  color: black;
  text-align: center;
  align-content: center;
  justify-content: center;
`;

const ContainerButtons = styled.div`
  display: flex;
  height: min-content;
  background-color: white;
  align-content: center;
  margin: 0px 0px 0px 75px;
`;

const StyledButton = styled.p`
  color: #e18b37;
  text-decoration: none;
  font-size: 17px;
  align-items: center;
  :hover {
    border-bottom: rgba(230, 50, 218, 0.5) solid 2px;
    cursor: pointer;
    opacity: 0.6;
  }
  :active {
    background-color: whitesmoke;
  }
`;

const Admin = () => {
  return (
    <>
      <Header />
      <NavbarAdminHome />
      <ContainerButtons>
        <Link style={{ textDecoration: "none" }} to="/Admin/User/New">
          <div style={{ display: "flex", justifyContent: "center" }}></div>
          <StyledButton>Novo Usuário</StyledButton>
        </Link>
      </ContainerButtons>
      <Container>
        <UserGrid />
      </Container>
      <Footer />
    </>
  );
};

export default Admin;
