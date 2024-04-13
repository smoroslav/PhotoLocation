import { configureStore } from "@reduxjs/toolkit";
import metaphotoSlice from "./slice";

const createStore = () =>
  configureStore({
    reducer: metaphotoSlice.reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: !!import.meta.env && !!import.meta.env.VITE_DEV_TOOLS,
  });

export default createStore;

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk was added as middleware
// - The Redux DevTools Extension is disabled for production
// Check -> https://redux-toolkit.js.org/api/configureStore
