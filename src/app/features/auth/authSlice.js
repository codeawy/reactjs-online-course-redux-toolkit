import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleLoggedIn: state => {
      // ** Don't mutate your state
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const selectAuth = ({ auth }) => auth;
export const { toggleLoggedIn } = authSlice.actions;
export default authSlice.reducer;
