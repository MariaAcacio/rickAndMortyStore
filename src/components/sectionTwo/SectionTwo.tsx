import { useState } from 'react';
import { Card } from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { setMinValue, setMaxValue } from '../../store/slice/minAndMaxSlice';
import { getIdsForApi } from '../../tools/getIdsForApi';
import { storeType, storeDispatchType } from '../../store';
import { fetchRamApi } from '../../store/slice/fetchAPI';
import { setIsLoading } from '../../store/slice/fetchAPI';
import { Spinner } from '../spinner/Spinner';
import {
  GeneralContainerTwo,
  Title,
  MinAndMaxContent,
  MinContent,
  MaxContent,
  ButtonSearch,
  ButtonContent,
} from './SectionTwo.elements';
export const SectionTwo = () => {
  const [redFlag, setRedFlag] = useState(false);
  const { characterList, isLoading } = useSelector(
    (state: storeType) => state.CharactersReducer
  );
  const { minValue, maxValue } = useSelector(
    (state: storeType) => state.minAndMaxReducer
  );
  const dispatch: storeDispatchType = useDispatch();

  const handlerSearch = () => {
    setRedFlag(false);
    if (minValue >= 1 && maxValue <= 800) {
      if (maxValue <= minValue + 9 && maxValue >= minValue + 2) {
        const numbersForApi = getIdsForApi(minValue, maxValue);
        dispatch(setIsLoading(true));
        dispatch(fetchRamApi(numbersForApi));
        dispatch(setIsLoading(false));
      } else {
        setRedFlag(true);
      }
    } else {
      setRedFlag(true);
    }
  };
  return (
    <GeneralContainerTwo>
      <Title>Characters</Title>
      <MinAndMaxContent redFlag={redFlag}>
        <MinContent redFlag={redFlag}>
          <label>Min:</label>
          <input
            type="number"
            id="min"
            placeholder="min"
            value={minValue}
            onChange={(event) =>
              dispatch(setMinValue(parseInt(event.target.value)))
            }
          />
        </MinContent>
        <MaxContent redFlag={redFlag}>
          <label>Max:</label>
          <input
            type="number"
            id="max"
            placeholder="max"
            value={maxValue}
            onChange={(event) =>
              dispatch(setMaxValue(parseInt(event.target.value)))
            }
          />
        </MaxContent>
      </MinAndMaxContent>
      <ButtonContent>
        <ButtonSearch onClick={() => handlerSearch()}>Search</ButtonSearch>
      </ButtonContent>
      {isLoading ? (
        <Spinner />
      ) : (
        characterList.map((char, index) => (
          <Card
            key={index}
            id={char.id}
            name={char.name}
            gender={char.gender}
            status={char.status}
            image={char.image}
            episode={char.episode}
          />
        ))
      )}
    </GeneralContainerTwo>
  );
};
