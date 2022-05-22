import { createSlice } from '@reduxjs/toolkit';

type NumberAction = {
  payload: number;
  type: string;
};
type SetSearchValuesAction = {
  type: string;
  payload: { minSearchValue: number; maxSearchValue: number };
};
const minAndMaxSlice = createSlice({
  name: 'minAndMax',
  initialState: {
    minValue: 1,
    maxValue: 10,
    minSearchValue: 1,
    maxSearchValue: 10,
  },
  reducers: {
    setMinValue: (state, action: NumberAction) => {
      state.minValue = action.payload;
    },
    setMaxValue: (state, action: NumberAction) => {
      state.maxValue = action.payload;
    },
    setSearchValues: (state, action: SetSearchValuesAction) => {
      state.minSearchValue = action.payload.minSearchValue;
      state.maxSearchValue = action.payload.maxSearchValue;
    },
  },
});
export const { setMinValue, setMaxValue, setSearchValues } =
  minAndMaxSlice.actions;
export const minAndMaxReducer = minAndMaxSlice.reducer;
