import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  gap: 15px;
`;

const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 15px;
  padding: 15px;
  font-size: 0.9rem;
`;

const Search = () => {
  return (
    <SearchContainer>
        
      <SearchInput placeholder="search..." type="text" />
      Submit
    </SearchContainer>
  );
};

export default Search;
