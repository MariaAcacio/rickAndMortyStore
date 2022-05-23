import { configureStore } from '@reduxjs/toolkit';
import { minAndMaxReducer } from './slice/minAndMaxSlice';
import { CharactersReducer } from './slice/fetchAPI';
export const Store = configureStore({
  reducer: {
    minAndMaxReducer,
    CharactersReducer,
  },
});
export type storeType = ReturnType<typeof Store.getState>;
export type storeDispatchType = typeof Store.dispatch;
