import React from 'react'
import Card from './Card';
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

`

const GridContainer = ({bookmark}) => {
  return (
    <Container>
      {bookmark.map((item) => (
        <Card item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default GridContainer