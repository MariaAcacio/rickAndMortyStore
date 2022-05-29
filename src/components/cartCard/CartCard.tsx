import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { setCartList } from '../../store/slice/fetchAPI';
import { useDispatch } from 'react-redux';
import { useCharacter } from '../../hooks/useGlobalState';
import {
  ContainerCart,
  ButtonContainer,
  TextBox,
  DecreaseButton,
  DeleteButton,
  Features,
  General,
} from './CartCard.elements';

export const CartCard = ({
  name,
  id,
  status,
  gender,
  counter,
}: {
  name: string;
  id: number;
  status: string;
  gender: string;
  counter: number;
}): ReactJSXElement => {
  const dispatch = useDispatch();
  const { cartList } = useCharacter();

  const handlerDecreaseChar = () => {
    if (counter === 1) {
      const newListChar = cartList.filter((char) => char.id !== id);
      dispatch(setCartList(newListChar));
    } else {
      const decreaseCharCounter = cartList.map((char) => {
        if (char.id === id && char.counter > 0) {
          return { ...char, counter: char.counter - 1 };
        } else {
          return char;
        }
      });
      dispatch(setCartList(decreaseCharCounter));
    }
  };

  const handlerDeleteChar = () => {
    const newListChar = cartList.filter((char) => char.id !== id);
    dispatch(setCartList(newListChar));
  };

  return (
    <General>
      <ContainerCart>
        <TextBox>{`N°${id} - ${name}`}</TextBox>
        <ButtonContainer>
          <DecreaseButton onClick={() => handlerDecreaseChar()}>
            Decrease
          </DecreaseButton>
          <DeleteButton onClick={() => handlerDeleteChar()}>
            Delete Character
          </DeleteButton>
        </ButtonContainer>
      </ContainerCart>
      <Features>
        <div>{`Counter: ${counter}`}</div>
        <div>{`Status: ${status}`}</div>
        <div>{`Gender: ${gender}`}</div>
      </Features>
    </General>
  );
};
