import { createSlice } from "@reduxjs/toolkit";

const initialAbilityScoresState = {
  Strength: 0,
  Wisdom: 0,
  Constitution: 0,
  Dexterity: 0,
  Intelligence: 0,
  Charisma: 0,
};

export const abilityScoresSlice = createSlice({
  name: "abilityScores",
  initialState: { value: initialAbilityScoresState },
  reducers: {
    fillSlice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fillSlice } = abilityScoresSlice.actions;
export default abilityScoresSlice.reducer;
