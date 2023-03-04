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

export const getProductList = createAsyncThunk("products/getProductList", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    // ** Fulfilled
    const { data } = await axios.get("https://dummyjson.com/products");
    return data;
  } catch (error) {
    // ** Rejected
    return rejectWithValue(error);
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProductList.pending]: state => {
      state.isLoading = true;
    },
    [getProductList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getProductList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const selectProducts = ({ products }) => products;
export default productsSlice.reducer;
