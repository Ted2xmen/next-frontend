import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  border: 2px solid white;
  border-radius: 15px;
`;

const CardBody = styled.div`
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 1rem;
  }
  p {
    font-size: 0.9rem;
    text-overflow: ellipsis;
  }
  img { width: 100px; }
`;

const Card = ({ item }) => {
  return (
    <CardContainer>
      <CardBody>
        <p> {item._ref} </p>

        <h3>{item.title}</h3>
        <img
          src="https://github.com/dailydotdev/daily/raw/master/assets/Logo%20-%20Black%20(1).jpg"
          alt=""
        />
        {/* <img src={urlFor(item._ref)} alt="" /> */}
        <p>{item.description}</p>
        {/* <span>{item._id}</span> */}
      </CardBody>
    </CardContainer>
  );
};

export default Card;
