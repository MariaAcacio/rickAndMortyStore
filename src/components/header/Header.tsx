import React from 'react';
import styled from '@emotion/styled';

const HeaderRAM = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  width: 100%;
  height: 5rem;
  font-family: 'JosefinSansBold';
  font-weight: bold;
  text-align: center;
  color: #000000;
  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;

export const Header = () => {
  return (
    <HeaderRAM>
      <h1>Rick and Morty</h1>
    </HeaderRAM>
  );
};
