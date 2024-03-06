import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./control/cartSlice";

export const store = configureStore({
  // global state yönetimi buradan yapılıyor
  reducer: {
    cart: cartReducer,
  },
});
