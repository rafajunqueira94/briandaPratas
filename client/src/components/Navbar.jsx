import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";

import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 100px;
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  background-color: white;
`;

const StyledA = styled.a`
  display: flex;
  color: black;
  float: left;
  padding: 0.2rem;
  text-decoration: none;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  :hover {
    border-bottom: rgba(230, 50, 218, 0.5) solid 2px;
    cursor: pointer;
    opacity: 0.6;
  }
  :active {
    background-color: whitesmoke;
  }
`;

const Center = styled.div`
  flex: 7;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  display: flex;
  height: 40px;
  width: 125px;
  font-size: 1em;
  /* margin: 0.5em; */
  padding: 0.2em;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  background-color: white;
  box-shadow: 0.15em 0.15em 0.25em rgba(0, 0, 0, 0.4);
  border: 0.05px solid black;
  :hover {
    width: 130px;
    height: 45px;
    opacity: 0.7;
    font-size: 1.1em;
    transition: width ease-in-out;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <StyledButton>
            <MenuIcon />
            Categorias
          </StyledButton> */}
        </Left>
        <Center>
          <StyledA>
            <HomeOutlined />
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </StyledA>
          <StyledA>
            <TrendingUpIcon />
            <Link style={{ textDecoration: "none" }} to="/Product/List">
              Novidades
            </Link>
          </StyledA>
          <StyledA>
            <SellOutlinedIcon />
            <Link style={{ textDecoration: "none" }} to="/Product/OnSale">
              Promoções
            </Link>
          </StyledA>
        </Center>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
