import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/home/home";
import { About } from "./pages/about";
import { Login } from "./pages/login";
import { Begin } from "./pages/begin/begin";
import { AbilityScores } from "./pages/ability-scores/ability-scores";
import { Choices } from "./pages/choices";
import { Spells } from "./pages/spells";
import { CharacterSheet } from "./pages/character-sheet/character-sheet";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/begin" element={<Begin />} />
          <Route path="/ability-scores" element={<AbilityScores />} />
          <Route path="/choices" element={<Choices />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/character-sheet/:id" element={<CharacterSheet />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
