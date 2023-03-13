import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feauters/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
