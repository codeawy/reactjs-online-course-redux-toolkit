import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartSlice from "./features/cart/cartSlice";

// ** ID, Title, thumbnail, price
const persistCartConfig = {
  key: "shoppingCart",
  storage,
  // ** TODO
  // whitelist: ["id"],
};

const persistedReducer = persistReducer(persistCartConfig, cartSlice);

export const store = configureStore({
  reducer: {
    // ** Reducers
    cart: persistedReducer,
  },
});

export const persistor = persistStore(store);
