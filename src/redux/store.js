import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feauters/counterSlice";
import postsReducers from "../feauters/postsSlice";
import usersReducers from "../feauters/usersSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducers,
    users: usersReducers,
  },
});
