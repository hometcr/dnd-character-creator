import { ListOfChoices } from "../../components/ListOfChoices";
import { ListsContainer } from "../../components/ListsContainer";
import { ItemDescription } from "../../components/ItemDescription";
import bow from "../../assets/bow.png";

export const Choices = () => {
  let selectedItem = "Fighter";

  return (
    <div className="choices-page">
      <div className="choices-without-description">
        <div className="choices-bow-and-title">
          <img className="bow-image" src={bow} alt="bow and arrow" />
          <h2 className="choices-title">Step 3: Choices</h2>
          <div className="counter-bow"></div>
        </div>
        <ListsContainer />
      </div>
      <div className="choices-options-container">
        <ItemDescription item={selectedItem} />
      </div>
    </div>
  );
};
