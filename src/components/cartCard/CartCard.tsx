import React from 'react';
import {
  ContainerCart,
  ButtonContainer,
  TextBox,
  DecreaseButton,
  DeleteButton,
  Features,
  General,
} from './CartCard.elements';

export const CartCard = () => {
  return (
    <General>
      <ContainerCart>
        <TextBox>N° - name:</TextBox>
        <ButtonContainer>
          <DecreaseButton>Decrease</DecreaseButton>
          <DeleteButton>Delete Character</DeleteButton>
        </ButtonContainer>
      </ContainerCart>
      <Features>
        <div>Counter:</div>
        <div>Alive:</div>
        <div>Dead:</div>
        <div>Male:</div>
        <div>Female:</div>
      </Features>
    </General>
  );
};
