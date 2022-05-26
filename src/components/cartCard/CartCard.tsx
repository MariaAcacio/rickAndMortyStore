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
        <div>Status:</div>
        <div>Gender:</div>
      </Features>
    </General>
  );
};
