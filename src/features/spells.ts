import { createSlice } from "@reduxjs/toolkit";

const initialSpellsState = {
  cantrips: [],
  firstLevel: [],
  selected: [],
};

export const spellsSlice = createSlice({
  name: "spells",
  initialState: { value: initialSpellsState },
  reducers: {
    fillSlice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fillSlice } = spellsSlice.actions;
export default spellsSlice.reducer;
