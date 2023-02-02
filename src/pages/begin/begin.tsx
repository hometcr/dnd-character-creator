import { BeginCharacterForm } from "./components/BeginCharacterForm";
import { ItemDescription } from "../../components/ItemDescription";

let selectedItem = "Fighter";

export const Begin = () => {
  return (
    <div className="begin-character-page">
      <div className="begin-character-text">
        <h2 className="begin-character-title">Step 1: Begin Character</h2>
        <BeginCharacterForm />
      </div>
      <div className="begin-options-container">
        <ItemDescription item={selectedItem} />
      </div>
    </div>
  );
};
