import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    cache: {}
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state, action) => {
      state.isMenuOpen = false;
    },
    addQuery: (state, action) => {
      // this will create a new key value pair
      state.cache[action.payload.query] = action.payload.data;
    }
  },
});

export const { toggleMenu, closeMenu, addQuery } = appSlice.actions;
export default appSlice.reducer;
