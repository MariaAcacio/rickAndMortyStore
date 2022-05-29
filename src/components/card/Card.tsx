import React from 'react';
import { setHighlightedChar, setCartList } from '../../store/slice/fetchAPI';
import { useDispatch } from 'react-redux';
import { useCharacter } from '../../hooks/useGlobalState';
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
  const { cartList } = useCharacter();
  const dispatch = useDispatch();

  const handlerButtonCart = (): void => {
    const findCharacter = cartList.find((character) => character.name === name);

    if (findCharacter) {
      const incrementCharactersCounter = cartList.map((character) => {
        if (character.id === findCharacter.id) {
          return { ...character, counter: character.counter + 1 };
        } else {
          return character;
        }
      });
      dispatch(setCartList(incrementCharactersCounter));
    } else {
      dispatch(
        setCartList([...cartList, { name, id, gender, status, counter: 1 }])
      );
    }
  };

  return (
    <ContainerCard>
      <InfoContainer>
        <div>{id}</div>
        <div>{name}</div>
      </InfoContainer>
      <ButtonsContainer>
        <ButtonCart onClick={() => handlerButtonCart()}>Add to cart</ButtonCart>
        <HighlightButton
          onClick={() => {
            dispatch(
              setHighlightedChar({ name, id, image, status, gender, episode })
            );
          }}
        >
          Highlight
        </HighlightButton>
      </ButtonsContainer>
    </ContainerCard>
  );
};
