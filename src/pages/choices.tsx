import { ListsContainer } from "../components/ListsContainer";
import { ItemDescription } from "../components/ItemDescription";
import bow from "../assets/bow.png";
import { NavigateButton } from "../components/NavigateButton";

export const Choices = () => {
  let selectedItem = "";

  let knownProficiencies = ["Animal Handling", "Survival"];
  let unknownProficiencies = [
    ["Acrobatics", "Strength", "Dexterity"],
    ["Acrobatics", "Strength", "Dexterity"],
  ];
  let knownEquipment = ["Shovel", "Iron Pot", "Common Clothes"];
  let unknownEquipment = [
    ["Explorer's Pack", "Dungeoneer's Pack"],
    [
      "Calligrapher's Supplies",
      "Carpenter's Tools",
      "Cook's Utensils",
      "Mason's Tools",
      "Tinker's Tools",
    ],
  ];
  let knownWeapons = ["Longbow"];
  let unknownWeapons = [
    ["Shield", "Axe"],
    ["Light Crossbow", "Javelin"],
  ];
  let knownLanguages = ["Common", "Dwarvish"];
  let unknownLanguages = [[]];

  return (
    <div className="choices-page">
      <div className="choices-without-description">
        <div>
          <div className="choices-bow-and-title">
            <img className="bow-image" src={bow} alt="bow and arrow" />
            <h2 className="choices-title">Step 3: Choices</h2>
            <div className="counter-bow"></div>
          </div>
          <ListsContainer
            page="choices"
            knownEquipment={knownEquipment}
            unknownEquipment={unknownEquipment}
            knownProficiencies={knownProficiencies}
            unknownProficiencies={unknownProficiencies}
            knownWeapons={knownWeapons}
            unknownWeapons={unknownWeapons}
            knownLanguages={knownLanguages}
            unknownLanguages={unknownLanguages}
          />
        </div>
        <NavigateButton
          destination="spells"
          text="Next"
          className="choices-next-button"
        />
      </div>
      <div className="choices-description-container">
        <ItemDescription item={selectedItem} />
      </div>
    </div>
  );
};
