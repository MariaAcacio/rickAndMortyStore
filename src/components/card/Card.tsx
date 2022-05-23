import React from 'react';
import {
  ContainerCard,
  InfoContainer,
  ButtonsContainer,
  ButtonCart,
  HighlightButton,
} from './Card.elements';

export const Card = ({ id, name }: { id: number; name: string }) => {
  return (
    <ContainerCard>
      <InfoContainer>
        <div>{id}</div>
        <div>{name}</div>
      </InfoContainer>
      <ButtonsContainer>
        <ButtonCart>Add to cart</ButtonCart>
        <HighlightButton>Highlight</HighlightButton>
      </ButtonsContainer>
    </ContainerCard>
  );
};
