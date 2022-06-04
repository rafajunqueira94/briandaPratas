import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  z-index: 999;
  width: 100vw;
  height: 90px;
  background-color: #fffaee;
  margin-bottom: 0px;
  text-align: right;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
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

const Right = styled.div`
  flex: 3;
  width: min-content;
  display: inline-flex;
  align-items: right;
  margin-right: 2vw;
  padding: 0px 0px 20px 20px;
  justify-content: space-around;
`;

const Left = styled.div`
  flex: 1;
  width: min-content;
  display: grid;
  align-items: left;
  margin-left: 2vw;
  padding: 25px 0px 20px 20px;
`;

const StyledASocial = styled.a`
  display: flex;
  color: black;
  padding: 0.2rem;
  text-decoration: none;
  font-size: 17px;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
  :active {
    background-color: #04aa6d;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <StyledASocial>
            <InstagramIcon style={{ color: "#F50057" }} /> @bripratas
          </StyledASocial>
          <StyledASocial>
            <WhatsAppIcon style={{ color: "green" }} /> +55 (16) 99275-5049
          </StyledASocial>
        </Left>
        <Right>
          <StyledA>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>
          </StyledA>
          <StyledA>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/Product/List"
            >
              Novidades
            </Link>
          </StyledA>
          <StyledA>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/Product/OnSale"
            >
              Promoções
            </Link>
          </StyledA>
          <StyledA>Todos os Produtos</StyledA>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Footer;
