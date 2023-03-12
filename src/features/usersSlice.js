import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Mirziyod Sunatillayev" },
  { id: "1", name: "Azizbek Ravshanov" },
  { id: "2", name: "Isroil Ortiqov" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
