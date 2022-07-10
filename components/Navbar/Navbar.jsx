import React from "react";
import styled from "styled-components";
import NavItems from "./NavItems";

const NavbarContainer = styled.div`
  background-color: #2d3340;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;
  padding-left: 30px;
  h2 {
    
    color: #d7f205;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <h2>LOGO</h2>
      <NavItems />
    </NavbarContainer>
  );
};

export default Navbar;
