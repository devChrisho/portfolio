import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface SystemState {
  isDarkMode: boolean;
}

// Define the initial state using that type
const initialState: SystemState = {
  isDarkMode: false,
};

export const systemSlice = createSlice({
  name: "system",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = systemSlice.actions;

export default systemSlice.reducer;
