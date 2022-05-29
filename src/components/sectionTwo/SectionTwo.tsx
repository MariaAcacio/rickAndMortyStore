import { useState } from 'react';
import { useCharacter, useMaxAndMin } from '../../hooks/useGlobalState';
import { Card } from '../card/Card';
import { useDispatch } from 'react-redux';
import { useRedFlag } from '../../hooks/useRedFlag';
import { setMinValue, setMaxValue } from '../../store/slice/minAndMaxSlice';
import { getIdsForApi } from '../../tools/getIdsForApi';
import { storeDispatchType } from '../../store';
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
  const [redFlag, activateRedFlag] = useRedFlag();
  const { characterList, isLoading } = useCharacter();
  const { minValue, maxValue } = useMaxAndMin();
  const dispatch: storeDispatchType = useDispatch();

  const handlerSearch = () => {
    // setRedFlag(false);
    if (minValue >= 1 && maxValue <= 800) {
      if (maxValue <= minValue + 9 && maxValue >= minValue + 2) {
        const numbersForApi = getIdsForApi(minValue, maxValue);
        dispatch(setIsLoading(true));
        dispatch(fetchRamApi(numbersForApi));
      } else {
        activateRedFlag();
      }
    } else {
      activateRedFlag();
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
