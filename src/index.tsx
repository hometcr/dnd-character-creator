import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import a reducer for every piece of state
import beginReducer from "./features/begin";
import abilityScoresReducer from "./features/abilityScores";
import choicesReducer from "./features/choices";
import spellsReducer from "./features/spells";

export type IRootState = ReturnType<typeof store.getState>;

// store the global states
const store = configureStore({
  reducer: {
    begin: beginReducer,
    abilityScores: abilityScoresReducer,
    choices: choicesReducer,
    spells: spellsReducer,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
