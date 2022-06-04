import styled from "styled-components";
import {
  Search,
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";

import React, { useEffect, useState } from "react";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 5px;
  min-width: 240px;
  height: 360px;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;
  :hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all ease 0.5s;
  :hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

export const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} id={item._id} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
