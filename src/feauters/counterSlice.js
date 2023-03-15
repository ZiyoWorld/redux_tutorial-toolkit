import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  x1: 0,
  x2: 0,
  d: 0,
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
    // discremenant: (state, action) => {
    //   state.d = Math.sqrt(
    //     Math.pow(action.payload.b, 2) - 4 * action.payload.a * action.payload.c
    //   );
    // },
    recent: (state) => {
      state.count = 0;
    },
    addNumber: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, recent, addNumber, discremenant } =
  counterSlice.actions;

export default counterSlice.reducer;
