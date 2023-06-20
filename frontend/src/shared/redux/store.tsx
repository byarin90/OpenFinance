import { configureStore } from '@reduxjs/toolkit';
import plaidReducer, { IPlaid } from './features/plaidSlice';

export interface IRootState {
  plaidReducer: IPlaid;
}

const myStore = configureStore({
  reducer: {
    plaidReducer
  }
});

export type RootState = ReturnType<typeof myStore.getState>;

export default myStore;