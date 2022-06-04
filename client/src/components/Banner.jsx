import React from "react";
import { RemoveRedEyeOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: white;
  /* overflow: hidden; */
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const Slide = styled.div`
  /* width: 100vw; */
  height: 100%;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  /* width: 100%; */
  background-size: cover;
  height: 340px;
`;

const Image = styled.img`
  width: 100vw;
  transform: translateY(-870px);
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  position: absolute;
  right: 125px;
  bottom: 30px;
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
`;

const StyledButtonCart = styled(Button)`
  background-color: #fff719;
  color: black;
  :hover {
    background-color: #fffa68;
  }
`;

const StyledButtonDetails = styled(Button)`
  color: white;
  background-color: #d87d20;
  :hover {
    background-color: #e59849;
  }
`;

const Slider = () => {
  return (
    <Container>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image
              // src="https://i.ibb.co/6XPv32L/banner-img.png"
              src="https://i.ibb.co/Q9ppD6m/img-banner.jpg"
              alt="banner"
            ></Image>
          </ImgContainer>
          <InfoContainer>
            <StyledButtonCart>
              <ShoppingCartOutlined />
              Comprar
            </StyledButtonCart>
            <StyledButtonDetails>
              <RemoveRedEyeOutlined />
              Detalhes
            </StyledButtonDetails>
          </InfoContainer>
        </Slide>
      </Wrapper>
    </Container>
  );
};

export default Slider;
