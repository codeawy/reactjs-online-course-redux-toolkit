import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import themeSlice from "./features/theme/themeSlice";
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    // ** Reducers
    counter: counterSlice,
    theme: themeSlice,
    auth: authSlice,
  },
});
