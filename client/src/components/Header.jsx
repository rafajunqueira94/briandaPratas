import React from "react";
import { Badge } from "@material-ui/core";
import {
  Search,
  ShoppingCartOutlined,
  PersonOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { ReactComponent as LogoImg } from "../logosvg.svg";
import { Link } from "react-router-dom";

// Styled Components
const Container = styled.div`
  height: 200px;
  background-color: #fffaee;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: 0.5px solid rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 20px;
  border-radius: 7px;
  :hover {
    cursor: text;
  }
`;

const Center = styled.div`
  flex: 3;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 35px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const iconDefaultSettings = { color: "#DD7C1E", cursor: "pointer" };
const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    backgroundColor: "rgba(255, 0, 0, 0.6)",
    color: "white",
  },
});

const StyledNavbar = styled.nav`
  font-size: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Link style={{ textDecoration: "none" }} to="/">
              <LogoImg />
            </Link>
          </Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input></Input>
            <Search style={iconDefaultSettings} />
          </SearchContainer>
        </Center>
        <Right>
          {/* ICON - USER */}

          <MenuItem>
            <StyledBadge badgeContent={2}>
              <Link style={{ textDecoration: "none" }} to="/Admin/Home">
                <PersonOutlined style={iconDefaultSettings} />
              </Link>
            </StyledBadge>
          </MenuItem>

          {/* ICON - FAVORITE/HEART */}

          <MenuItem>
            <StyledBadge badgeContent={4}>
              <FavoriteBorderOutlined style={iconDefaultSettings} />
            </StyledBadge>
          </MenuItem>

          {/* ICON - SHOPPING CART */}

          <MenuItem>
            <StyledBadge badgeContent={4}>
              <ShoppingCartOutlined style={iconDefaultSettings} />
            </StyledBadge>
          </MenuItem>
        </Right>
      </Wrapper>
      <StyledNavbar>
        {/* <Link to="/">Link 1</Link> */}
        {/* <Link to="/">Link 2</Link> */}
      </StyledNavbar>
    </Container>
  );
};

export default Header;
