import React from "react";
import styled from "styled-components";
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Image = styled.img`
  object-fit: cover;
  width: 20vw;
  height: 25vw;
  z-index: 2;
  justify-content: left;
  margin-left: 15px;
  :hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 94vw;
  height: 40vw;
  background-color: white;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 2.5vw 0 7px 2.5vw;
  justify-self: center;
  padding: 5px;
  position: relative;
`;

const NewContainer = styled.div`
  display: block;
  margin-top: 40px;
`;

const Button = styled.button`
  display: flex;
  color: black;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.2em 1em;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
`;

const StyledButtonCart = styled(Button)`
  display: flex;
  background-color: #fff719;
  color: black;
  :hover {
    background-color: #fffa68;
  }
`;

const StyledButtonFav = styled(Button)`
  background-color: white;
  color: #ff0000;
  :hover {
    background-color: #f5f5f5;
  }
`;

const StyledButtonShipping = styled(Button)`
  display: flex;
  background-color: white;
  color: #39acd6;
  width: 150px;
  margin-bottom: 0;
`;

const ContainerStarRating = styled.div`
  display: inline-flex;
  color: yellow;
  margin-left: 10px;
  padding: 5px;
  width: auto;
  align-content: center;
`;

const Container = styled.div`
  display: grid;
  position: absolute;
  margin-left: calc(20vw + 30px);
  justify-content: center;
  align-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 19vw;
`;

const StyledProductTitleDisplay = styled.p`
  font-size: 22pt;
  width: 50%;
  color: pink;
`;

const StyledProductSubTitleDisplay = styled.p`
  font-size: 18pt;
  width: 60%;
  color: green;
`;

const StyledProductDescriptionDisplay = styled.p`
  font-size: 12pt;
  width: 98%;
  color: red;
`;

const StyledProductPriceDisplay = styled.p`
  font-size: 12pt;
  width: 100%;
  color: blue;
  font-weight: 600;
`;

export const Product = ({ item }) => {
  return (
    <Wrapper>
      <Image src={item.img} />
      <Container>
        <Info>
          <StyledProductTitleDisplay>{item.name1}</StyledProductTitleDisplay>
          <StyledProductSubTitleDisplay>
            {item.name2}
          </StyledProductSubTitleDisplay>
          <StyledProductDescriptionDisplay>
            {item.description}
          </StyledProductDescriptionDisplay>
          <StyledProductPriceDisplay>
            {item.price1.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </StyledProductPriceDisplay>
        </Info>
        <NewContainer>
          <StyledButtonShipping>
            <LocalShippingIcon /> Frete Grátis
          </StyledButtonShipping>
          <NewContainer>
            <ContainerStarRating>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarHalfIcon />
              <StarBorderIcon />
              <span
                style={{
                  color: "black",
                  left: "125px",
                  alignItems: "center",
                  justifyContent: "center",

                  marginLeft: "10px",
                }}
              >
                {item.rating}/5⠀({item.ratingCount})
              </span>
            </ContainerStarRating>
          </NewContainer>
          <NewContainer style={{ display: "inline-flex", marginTop: "0" }}>
            <StyledButtonCart>
              <ShoppingCartOutlined /> Comprar
            </StyledButtonCart>
            <StyledButtonFav>
              <FavoriteBorderOutlined /> Favoritar
            </StyledButtonFav>
          </NewContainer>
        </NewContainer>
      </Container>
    </Wrapper>
  );
};

export default Product;
