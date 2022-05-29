import { useSelector } from 'react-redux';
import { CartCard } from '../cartCard/CartCard';
import { storeType } from '../../store';
import {
  GeneralContentThree,
  CartCardContainer,
  TotalCharacters,
} from './SectionThree.elements';

export const SectionThree = () => {
  const { cartList } = useSelector(
    (state: storeType) => state.CharactersReducer
  );
  let totalCharCounter = 0;
  cartList.forEach(
    (character) => (totalCharCounter = totalCharCounter + character.counter)
  );
  console.log('total char', totalCharCounter);

  return (
    <>
      {cartList.length && (
        <GeneralContentThree>
          <h2>Cart</h2>
          <CartCardContainer>
            {cartList.map((char, index) => (
              <CartCard
                key={index}
                name={char.name}
                id={char.id}
                status={char.status}
                gender={char.gender}
                counter={char.counter}
              />
            ))}
          </CartCardContainer>
          <TotalCharacters>{`Total Characters: ${totalCharCounter}`}</TotalCharacters>
        </GeneralContentThree>
      )}
    </>
  );
};
