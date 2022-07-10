import React from "react";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";

const SidebarContainer = styled.div`
  background-color: #2d3340;
  color: #d7f205;
  border: 1px solid #010440;
  width: 220px;
  height: 1900px; // later: need to set this to the height of the page
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItems />
    </SidebarContainer>
  );
};

export default Sidebar;
