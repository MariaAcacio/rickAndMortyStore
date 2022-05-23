// export {};
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { storeDispatchType } from '..';

type charType = {
  id: number;
  name: string;
  gender: string;
  status: string;
  image: string;
  episode: string[];
};
type StateCharList = { characterList: charType[]; highlightedChar?: charType };

const fetchApiSlice = createSlice({
  name: 'characters',
  initialState: {
    characterList: [],
    highlightedChar: undefined,
  } as StateCharList,
  reducers: {
    setCharacterList: (state, action) => {
      state.characterList = action.payload;
    },
    setHighlightedChar: (state, action) => {
      state.highlightedChar = action.payload;
    },
  },
});

export const { setCharacterList, setHighlightedChar } = fetchApiSlice.actions;
export const CharactersReducer = fetchApiSlice.reducer;

export const fetchRamApi =
  (charactersId: string) => (dispatch: storeDispatchType) => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${charactersId}`)
      .then((res) => {
        dispatch(setCharacterList(res.data));
      })
      .catch((error) => console.log(error));
  };
