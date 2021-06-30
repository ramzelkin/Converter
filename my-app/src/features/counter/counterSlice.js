import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    input: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    convert: (state, action) => {
        state.input = action.payload;
    }
  }
});

export const { convert } = counterSlice.actions;
export const selectInput = (state) => state.counter.input;

export default counterSlice.reducer;
