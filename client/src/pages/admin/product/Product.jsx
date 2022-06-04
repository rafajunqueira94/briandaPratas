import React from "react";
import Header from "../../../components/Header";
import NavbarAdminHome from "../../../components/admin/NavbarAdmin";
import Footer from "../../../components/Footer";
import styled from "styled-components";
import ProductGrid from "../../../components/admin/GridProduct";
import { Link } from "react-router-dom";

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

const Container = styled.div`
  display: flex;
  font-size: 35pt;
  color: black;
  text-align: center;
  height: min-content;
`;

const Admin = () => {
  return (
    <>
      <Header />

      <NavbarAdminHome />
      <ContainerButtons>
        <Link style={{ textDecoration: "none" }} to="/Admin/Product/New">
          <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}></div>
          <StyledButton>Novo Produto</StyledButton>
        </Link>
      </ContainerButtons>

      <Container>
        <ProductGrid />
      </Container>

      <Footer />
    </>
  );
};

export default Admin;
