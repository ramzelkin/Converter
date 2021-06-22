import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    input: 0,
    output: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    convert: (state, action) => {
        state.input = action.payload;
        state.output = action.payload * 2.5;
    }
  }
});



export const { convert } = counterSlice.actions;
export const selectInput = (state) => state.counter.input;
export const selectOutput = (state) => state.counter.output;

export default counterSlice.reducer;
