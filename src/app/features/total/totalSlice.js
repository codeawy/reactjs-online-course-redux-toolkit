import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [],
  tempArr: [],
};

export const totalSlice = createSlice({
  name: "total",
  initialState,
  reducers: {
    // TODO
    addToTotal: (state, action) => {},
  },
});

export const selectTotal = ({ total }) => total;
export const { addToTotal } = totalSlice.actions;
export default totalSlice.reducer;
