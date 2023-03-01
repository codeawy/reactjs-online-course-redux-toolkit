import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  num: 0,
  maxNum: 20,
};

// ** Slice of Store (State) === Reducer
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // ** Actions (Functions) 👇
    increment: state => {
      state.num = state.num + 1;
    },
    decrement: state => {
      state.num = state.num - 1;
    },
    reset: state => {
      state.num = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
