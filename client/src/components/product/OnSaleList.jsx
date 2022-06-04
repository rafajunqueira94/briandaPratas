import React from "react";
import styled from "styled-components";
import ProductOnSale from "./OnSale";
import { useState, useEffect } from "react";
import Axios from "axios";

const Container = styled.div`
  background-color: rgba(255, 250, 238, 0.7);
`;

const StyledTitle = styled.p`
  font-size: 25pt;
  font-weight: 400;
  color: black;
  text-align: center;
  text-justify: auto;
  width: 100vw;
  position: relative;
  padding-top: 15px;
`;

export const ProductsOnSale = () => {
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/product/")
      .then((response) => {
        setListOfProducts(response.data);
        console.log(response.data);
        console.log(response.data.length);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <StyledTitle>Produtos em Promoção</StyledTitle>
      {listOfProducts.map((item) => (
        <ProductOnSale item={item} key={{ id: item._id }} />
      ))}
    </Container>
  );
};

export default ProductsOnSale;
