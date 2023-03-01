import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import themeSlice from "./features/theme/themeSlice";
import authSlice from "./features/auth/authSlice";
import totalSlice from "./features/total/totalSlice";

export const store = configureStore({
  reducer: {
    // ** Reducers
    counter: counterSlice,
    theme: themeSlice,
    auth: authSlice,
    total: totalSlice,
  },
});
