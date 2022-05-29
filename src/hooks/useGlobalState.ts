import { storeType } from '../store';
import { useSelector } from 'react-redux';

export const useCharacter = () => {
  const useChar = useSelector((state: storeType) => state.CharactersReducer);
  return useChar;
};
export const useMaxAndMin = () => {
  const useMaxMin = useSelector((state: storeType) => state.minAndMaxReducer);
  return useMaxMin;
};
