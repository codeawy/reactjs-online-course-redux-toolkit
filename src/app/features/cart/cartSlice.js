import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "../../../utils";

const initialState = {
  productsCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ** Actions
    addToCart: (state, action) => {
      state.productsCart = addItemToCart(action.payload, state.productsCart);
    },
    removeFromCart: (state, action) => {
      state.productsCart = [...state.productsCart].filter(item => item.id !== +action.payload);
    },
    resetCart: state => {
      state.productsCart = [];
    },
  },
});

export const selectCart = ({ cart }) => cart;
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
