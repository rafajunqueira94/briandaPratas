import React from "react";
import Header from "../../../components/Header";
import NavbarAdminHome from "../../../components/admin/NavbarAdmin";
import NewUser from "../../../components/admin/NewUser";
import UserGrid from "../../../components/admin/GridUser";
import Footer from "../../../components/Footer";
import styled from "styled-components";
// import Products from "../components/Products";

const Container = styled.div`
  display: flex;
  font-size: 35pt;
  color: black;
  text-align: center;
`;

const AdminNewProduct = () => {
  return (
    <>
      <Header />
      <NavbarAdminHome />
      <NewUser />
      <Container>
        <UserGrid />
      </Container>
      <Footer />
    </>
  );
};

export default AdminNewProduct;
