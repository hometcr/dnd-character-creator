import { createSlice } from "@reduxjs/toolkit";

const initialChoicesState = {
  skillProficiencies: [],
  itemProficiencies: [],
  items: [],
  armorAndWeapons: [],
  languages: []
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
