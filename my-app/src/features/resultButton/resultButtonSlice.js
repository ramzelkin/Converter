import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from '../../api/client.js'

const initialState = {
    currencyRate: 0
};

const socket = new WebSocket('wss://ws-feed-public.sandbox.exchange.coinbase.com');

export const fetchCurrencyRateAsync = createAsyncThunk('currency/fetchRate', async (value) => {
  let promise = new Promise((resolve, reject) => {
    socket.onmessage = function(event) {
      alert('data from websocket!!!');
      alert(event.data);
      resolve(event.data);
    };
  });

  socket.send('{"type": "subscribe","channels": [{ "name": "status"}]}');

  
  return await promise; 
    // const response = await client.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${value.from}&to_currency=${value.to}&apikey=IWAWBL3HLYTV52OW`);    
  }
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
      //  state.currencyRate = action.payload["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
       state.currencyRate = 2.5;

     });
 }
});

export const { calculate } = resultButtonSlice.actions;
export const getRate = (state) => state.resultButton.currencyRate;
export default resultButtonSlice.reducer;
