import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'


const SidebarContainer = styled.ul`
    padding-top: 30px;
    display: flex;
    flex-direction: column;
`

const Li = styled.li`
    padding: 10px;
    font-size: 1rem;
    list-style: none;
    cursor: pointer;
`

const SidebarItems = () => {
  return (
    <SidebarContainer>
      <Link href="/">
        <Li>Home</Li>
      </Link>
      <Link href="about">
        <Li>About</Li>
      </Link>
      <Link href="contact">
        <Li>Contact</Li>
      </Link>
    </SidebarContainer>
  );
}

export default SidebarItems