import { createSlice } from "@reduxjs/toolkit";

interface IChoices {
  skillProficiencies: string[],
  itemProficiencies: string[],
  items: string[],
  armorAndWeapons: string[],
  languages: string[],
}

const initialChoicesState: IChoices = {
  skillProficiencies: [],
  itemProficiencies: [],
  items: [],
  armorAndWeapons: [],
  languages: [],
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
