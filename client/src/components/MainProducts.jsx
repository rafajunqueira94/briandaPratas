import React from "react";
import {
  ArrowForwardIosOutlined,
  ArrowBackIosOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import {
  Search,
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";

import { useState, useEffect } from "react";
import Axios from "axios";

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

const ImageInfoContainer = styled.div`
  display: flex;
  flex: 1;
  width: calc(100vw / 5);
  height: auto;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;
  :hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
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

const Container = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
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

const Wrapper = styled.div`
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
`;

const Image = styled.img`
  z-index: 2;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Arrow = styled.div`
  width: 35px;
  height: 35px;
  padding: 1px;
  background-color: coral;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  color: white;
  z-index: 2;
`;

const MainProducts = () => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [slideIndex, setSlideIndex] = useState();

  useEffect(() => {
    Axios.get("http://localhost:4000/product")
      .then((response) => {
        setListOfProducts(response.data);
        setSlideIndex(response.data.length);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex <= 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <StyledTitle>Produtos em destaque</StyledTitle>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide>
          {listOfProducts.map((product) => (
            <ImageInfoContainer>
              <Circle />
              <Image
                src={product.img}
                id={product._id}
                key={product._id}
                alt="Imagem do produto"
              />
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
            </ImageInfoContainer>
          ))}
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default MainProducts;
