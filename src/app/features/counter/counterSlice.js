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
    incrementByPayload: (state, action) => {
      state.num = state.num + action.payload;
    },
    decrement: state => {
      state.num = state.num - 1;
    },
    reset: state => {
      state.num = 0;
    },
  },
});

export const selectCounter = ({ counter }) => counter;
export const { increment, incrementByPayload, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
