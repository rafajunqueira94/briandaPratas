import React from "react";
import Header from "../../../components/Header";
import NavbarAdminHome from "../../../components/admin/NavbarAdmin";
import NewCustomer from "../../../components/admin/NewCustomer";
import CustomerGrid from "../../../components/admin/GridCustomer";
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
      <NewCustomer />
      <Container>
        <CustomerGrid />
      </Container>
      <Footer />
    </>
  );
};

export default AdminNewProduct;
