import { BeginCharacterForm } from "./components/BeginCharacterForm";
import { ItemDescription } from "../../components/ItemDescription";
import {NavigateButton} from "../../components/NavigateButton"

export const Begin = () => {

  let selectedItem = "";

  return (
    <div className="begin-character-page">
      <div className="begin-character-text">
        <h2 className="begin-character-title">Step 1: Begin Character</h2>
        <BeginCharacterForm />
        {/* <NavigateButton destination="/ability-scores" text="Next" className="begin-next-button"/> */}
      </div>
      <div className="begin-options-container">
        <ItemDescription item={selectedItem} />
      </div>
    </div>
  );
};
