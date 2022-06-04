import React from "react";
import styled from "styled-components";
// import { popularProducts } from "../../data";
import Product from "./Product";
import { useState, useEffect } from "react";
import Axios from "axios";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledTitle = styled.p`
  font-size: 25pt;
  font-weight: 400;
  color: black;
  text-align: center;
  text-justify: auto;
  width: 100vw;
  position: relative;
  padding: 15px;
`;

export const ProductList = () => {
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/product/")
      .then((response) => {
        setListOfProducts(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <Container>
      <StyledTitle>Produtos em destaque</StyledTitle>
      {listOfProducts.map((product) => (
        <Product item={product} key={product._id} />
      ))}
    </Container>
  );
};

export default ProductList;
