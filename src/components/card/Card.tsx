import React from 'react';
import { setHighlightedChar, setCartList } from '../../store/slice/fetchAPI';
import { useDispatch, useSelector } from 'react-redux';
import { storeType } from '../../store';
import {
  ContainerCard,
  InfoContainer,
  ButtonsContainer,
  ButtonCart,
  HighlightButton,
} from './Card.elements';

export const Card = ({
  id,
  name,
  gender,
  status,
  image,
  episode,
}: {
  id: number;
  name: string;
  gender: string;
  status: string;
  image: string;
  episode: string[];
}) => {
  const { cartList } = useSelector(
    (state: storeType) => state.CharactersReducer
  );
  const dispatch = useDispatch();

  return (
    <ContainerCard>
      <InfoContainer>
        <div>{id}</div>
        <div>{name}</div>
      </InfoContainer>
      <ButtonsContainer>
        <ButtonCart>Add to cart</ButtonCart>
        <HighlightButton
          onClick={() => {
            dispatch(
              setHighlightedChar({ name, id, image, status, gender, episode })
            );
            // console.log(highlightedChar);
          }}
        >
          Highlight
        </HighlightButton>
      </ButtonsContainer>
    </ContainerCard>
  );
};
