import { BeginCharacterForm } from "./components/BeginCharacterForm";
import { ItemDescription } from "../../components/ItemDescription";
import {NavigateButton} from "../../components/NavigateButton"
import { useState } from "react";

export const Begin = () => {

  // let selectedItem = "";
  let [selectedItem, setSelectedItem] = useState("");

  return (
    <div className="begin-character-page">
      <div className="begin-character-text">
        <h2 className="begin-character-title">Step 1: Begin Character</h2>
        <BeginCharacterForm setItem={setSelectedItem}/>
      </div>
      <div className="begin-options-container">
        <ItemDescription item={selectedItem}/>
      </div>
    </div>
  );
};
