import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const metaphotoSlice = createSlice({
  name: "metaphoto",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    setItems: (state, action) => {
      state.items = [...state.items, ...action.payload];
    },
    setDeleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setDeleteAll: (state) => {
      state.items = [];
    },
    setSelectedItemId: (state, action) => {
      state.selectedItemId = action.payload;
    },
    setHoveredItemId: (state, action) => {
      state.hoveredItemId = action.payload;
    },
    updateItem: (state, action) => {
      const curr = state.items.find((item) => item.id === action.payload.id);
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.items = [...state.items, { ...curr, ...action.payload }];
    },
  },
});

export default metaphotoSlice;
