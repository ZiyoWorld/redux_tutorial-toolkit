import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import postSlice from "../features/postSlice";
import usersReducer from "../features/usersSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postSlice,
    users: usersReducer,
  },
});
