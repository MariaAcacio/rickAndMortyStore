import React from 'react';
import { CartCard } from '../cartCard/CartCard';
import {
  GeneralContentThree,
  CartCardContainer,
  TotalCharacters,
} from './SectionThree.elements';

export const SectionThree = () => {
  return (
    <GeneralContentThree>
      <h2>Cart</h2>
      <CartCardContainer>
        <CartCard />
        <CartCard />
        <CartCard />
      </CartCardContainer>
      <TotalCharacters>Total Characters: 8</TotalCharacters>
    </GeneralContentThree>
  );
};
