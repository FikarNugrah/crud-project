// store.js
import { configureStore } from "@reduxjs/toolkit";
import pegawaiReducer from "./pegawaiSlice";

const store = configureStore({
  reducer: {
    pegawai: pegawaiReducer,
  },
});

export default store;
