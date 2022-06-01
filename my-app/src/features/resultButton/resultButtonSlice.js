import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from '../../api/client.js'

const initialState = {
    currencyRate: 0
};


export const fetchCurrencyRateAsync = createAsyncThunk('currency/fetchRate', async (value) => {
    const response = await client.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${value.from}&to_currency=${value.to}&apikey=IWAWBL3HLYTV52OW`);
    return response;
);

export const resultButtonSlice = createSlice({
  name: 'resultButton',
  initialState,
  reducers: {
    calculate: (state, action) => {
        state.output = action.payload * 2.5;
    }
},
  extraReducers: (builder) => {
   builder
     .addCase(fetchCurrencyRateAsync.fulfilled, (state, action) => {
       state.currencyRate = action.payload["Realtime Currency Exchange Rate"]["5. Exchange Rate"];

     });
 }
});

export const { calculate } = resultButtonSlice.actions;
export const getRate = (state) => state.resultButton.currencyRate;
export default resultButtonSlice.reducer;
