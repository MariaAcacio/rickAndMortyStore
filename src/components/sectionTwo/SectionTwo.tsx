import { useState } from 'react';
import { Card } from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { setMinValue, setMaxValue } from '../../store/slice/minAndMaxSlice';
import { getNumbersForSearch } from '../../tools/getNombersForSearch';
import { storeType } from '../../store';
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
  const { minValue, maxValue } = useSelector(
    (state: storeType) => state.minAndMaxReducer
  );
  const dispatch = useDispatch();

  const handlerSearch = () => {
    setRedFlag(false);
    if (minValue >= 1 && maxValue <= 800) {
      if (maxValue <= minValue + 9 && maxValue >= minValue + 2) {
        const { numMin, numMax } = getNumbersForSearch(minValue, maxValue);
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
      <Card />
      <Card />
      <Card />
    </GeneralContainerTwo>
  );
};
