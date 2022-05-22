// export {};
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchApiSlice = createSlice({
  name: 'characters',
  initialState: {
    characterList: [],
  },
  reducers: {
    setCharacterList: (state, action) => {
      state.characterList = action.payload;
    },
  },
});

export const { setCharacterList } = fetchApiSlice.actions;
export const CharactersReducer = fetchApiSlice.reducer;
