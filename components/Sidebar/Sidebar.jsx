import React from "react";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";

const SidebarContainer = styled.div`
  background-color: #2d3340;
  color: #d7f205;
  border: 1px solid #010440;
  width: 250px;
  height: 100vh;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItems />
    </SidebarContainer>
  );
};

export default Sidebar;
