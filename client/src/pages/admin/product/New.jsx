import React from "react";
import Header from "../../../components/Header";
import NavbarAdminHome from "../../../components/admin/NavbarAdmin";
import NewProduct from "../../../components/admin/NewProduct";
import ProductGrid from "../../../components/admin/GridProduct";
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
      <NewProduct />
      <Container>
        <ProductGrid />
      </Container>
      <Footer />
    </>
  );
};

export default AdminNewProduct;
