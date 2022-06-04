import React from "react";
import Header from "../../components/Header";
// import NavbarAdminHome from "../../components/admin/NavbarAdmin";
import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";

const Admin = () => {
  return (
    <>
      <Header />
      {/* <NavbarAdminHome /> */}
      <LoginForm />
      <Footer />
    </>
  );
};

export default Admin;
