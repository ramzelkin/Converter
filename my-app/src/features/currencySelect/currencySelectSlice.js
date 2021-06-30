import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fromValue: '',
    toValue: '',
    fromCurrency: 'USD',
    toCurrency: 'USD',
    currencies: [
         "USD",
         "RUB",
         "EUR",
         "PLN",
         "CNY"
    ]
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    selectFromCurrency: (state, action) => {
        state.fromCurrency = action.payload;
    },
    selectToCurrency: (state, action) => {
        state.toCurrency = action.payload;
    }
  },

});

export const { selectFromCurrency } = currencySlice.actions;
export const getCurrency = (state) => state.currency.currencies;
export const getFromCurrency = (state) => state.currency.fromCurrency;
export const getToCurrency = (state) => state.currency.toCurrency;

export const { selectToCurrency } = currencySlice.actions;

export default currencySlice.reducer;
