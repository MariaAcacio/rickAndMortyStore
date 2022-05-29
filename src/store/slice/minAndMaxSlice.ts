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
  },
  reducers: {
    setMinValue: (state, action: NumberAction) => {
      state.minValue = action.payload;
    },
    setMaxValue: (state, action: NumberAction) => {
      state.maxValue = action.payload;
    },
  },
});
export const { setMinValue, setMaxValue } = minAndMaxSlice.actions;
export const minAndMaxReducer = minAndMaxSlice.reducer;
