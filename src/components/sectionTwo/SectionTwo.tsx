import { useState } from 'react';
import { Card } from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { setMinValue, setMaxValue } from '../../store/slice/minAndMaxSlice';
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
    console.log('hola ' + redFlag);

    if (minValue > maxValue) {
      setRedFlag(true);
    } else {
      setRedFlag(false);
    }
    console.log('chao ' + redFlag);
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
