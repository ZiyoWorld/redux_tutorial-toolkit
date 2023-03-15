import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Mirziyod Sunatillayev" },
  { id: "1", name: "Shoxrux Ne'matov" },
  { id: "2", name: "Sherzod Haydarov" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
