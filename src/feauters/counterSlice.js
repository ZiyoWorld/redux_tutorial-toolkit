import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) state.count -= 1;
    },
    recent: (state) => {
      state.count = 0;
    },
    addNumber: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, recent, addNumber } = counterSlice.actions;

export default counterSlice.reducer;
