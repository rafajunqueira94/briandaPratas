import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/product/List";
import OnSale from "./pages/product/OnSale";
import AdminHome from "./pages/admin/Home";
import AdminProduct from "./pages/admin/product/Product";
import AdminCustomer from "./pages/admin/customer/Customer";
import AdminUser from "./pages/admin/user/User";
import NewProduct from "./pages/admin/product/New";
import NewCustomer from "./pages/admin/customer/New";
import NewUser from "./pages/admin/user/New";
import AdminHomeLogin from "./pages/admin/HomeLoggedIn";
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/list" element={<ProductList />}></Route>
        <Route path="/product/onsale" element={<OnSale />}></Route>

        <Route path="/admin/home" element={<AdminHome />}></Route>
        <Route path="/admin/home/logged" element={<AdminHomeLogin />}></Route>
        <Route path="/admin/product" element={<AdminProduct />}></Route>
        <Route path="/admin/product/new" element={<NewProduct />}></Route>
        <Route path="/admin/customer" element={<AdminCustomer />}></Route>
        <Route path="/admin/customer/new" element={<NewCustomer />}></Route>
        <Route path="/admin/user" element={<AdminUser />}></Route>
        <Route path="/admin/user/new" element={<NewUser />}></Route>
      </Routes>
    </>
  );
};

export default Routers;
