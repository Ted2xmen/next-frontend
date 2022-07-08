import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
    width: 200px;
    height: 200px;
    border: 2px solid white;

`

const Card = ({item}) => {
  return <CardContainer>

        {item.title}

  </CardContainer>;
}

export default Card