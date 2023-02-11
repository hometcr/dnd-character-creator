import { createSlice } from "@reduxjs/toolkit";

const initialChoicesState = {
};

export const choicesSlice = createSlice({
  name: "choices",
  initialState: { value: initialChoicesState },
  reducers: {
    fillSlice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fillSlice } = choicesSlice.actions;
export default choicesSlice.reducer;
