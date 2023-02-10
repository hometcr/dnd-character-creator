import { createSlice } from "@reduxjs/toolkit";

const initialBeginState = {
  name: "",
  class: "",
  race: "",
  background: ""
};

export const beginSlice = createSlice({
  name: "character",
  initialState: { value: initialBeginState },
  reducers: {
    fillSlice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fillSlice } = beginSlice.actions;
export default beginSlice.reducer;
