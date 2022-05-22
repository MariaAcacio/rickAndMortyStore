import { configureStore } from '@reduxjs/toolkit';
import { minAndMaxReducer } from './slice/minAndMaxSlice';
export const Store = configureStore({
  reducer: {
    minAndMaxReducer,
  },
});
export type storeType = ReturnType<typeof Store.getState>;
