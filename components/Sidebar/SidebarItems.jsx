import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { sidebarData } from "../../menuData";

const SidebarContainer = styled.ul`
  padding-top: 30px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Li = styled.li`
  padding: 10px;
  font-size: 1rem;
  list-style: none;
  cursor: pointer;
  &:hover {
    background-color: green;
    color: white;
    border-radius: 5px;
    margin-right: 0.5rem;
  }
`;

const SidebarItems = () => {
  return (
    <SidebarContainer>
      {sidebarData.map((item) => {
        return (
          <Link href={item.url}>
            <Li> {item.name} </Li>
          </Link>
        );
      })}
    </SidebarContainer>
  );
};

export default SidebarItems;
