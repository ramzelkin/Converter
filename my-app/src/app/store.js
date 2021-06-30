import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import currencyReducer from '../features/currencySelect/currencySelectSlice';
import resultButtonReducer from '../features/resultButton/resultButtonSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    currency: currencyReducer,
    resultButton: resultButtonReducer
  },
});
