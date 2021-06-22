import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '',
    currencies: []
};

export const fetchCurrencyAsync = createAsyncThunk(
  'currency/fetchList',
  async () => {
    const response = await fetchList();
    return response.data;
  }
);

function fetchList() {
    let url = 'https://v2.api.forex/infos/currencies.json';
    return fetch(url);
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    selectCurrency: (state, action) => {
        state.currencies = action.payload;
    }
  },
  extraReducers: (builder) => {
   builder
     .addCase(fetchCurrencyAsync.fulfilled, (state, action) => {
       state.currencies = action.payload;
     });
 }
});

export const { selectCurrency } = currencySlice.actions;
export const getCurrency = (state) => state.currency.currencies;

export default currencySlice.reducer;
