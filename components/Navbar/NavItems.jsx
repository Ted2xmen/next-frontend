import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { categoryData } from "../../menuData";

const NavContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ListContainer = styled.li`
  padding: 10px;
  margin: 10px;
  color: #d7f205;
  list-style: none;
  cursor: pointer;
`;

const NavItems = () => {
  return (
    <>
      <NavContainer>
        {categoryData.map((item) => {
          return (
            <Link href={item.url}>
              <ListContainer> {item.name} </ListContainer>
            </Link>
          );
        })}
      </NavContainer>
    </>
  );
};

export default NavItems;
