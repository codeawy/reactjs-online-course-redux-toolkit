import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ** Pending
// ** Fulfilled
// ** Rejected

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const userLogin = createAsyncThunk("auth/userLogin", async (user, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  // ** TODO Then, Catch
  try {
    // ** Fulfilled
    const { data } = await axios.post("https://dummyjson.com/auth/login", user);
    return data;
  } catch (error) {
    // ** Rejected
    return rejectWithValue(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [userLogin.pending]: state => {
      state.isLoading = true;
    },
    [userLogin.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.data = action.payload;
    },
    [userLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const selectAuth = ({ auth }) => auth;
export default authSlice.reducer;
