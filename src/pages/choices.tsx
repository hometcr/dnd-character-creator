import { ListsContainer } from "../components/ListsContainer";
import { ItemDescription } from "../components/ItemDescription";
import bow from "../assets/bow.png";
import { NavigateButton } from "../components/NavigateButton";
import { useSelector } from "react-redux";
import { IRootState } from "../index";
import { descriptions, IDescriptions } from "../assets/descriptions";

export const Choices = () => {
  const beginningInfo = useSelector((state: IRootState) => state.begin.value);

  // change to update whenever a dropdown is changed
  let selectedItem = "";

  // get data from descriptions depending on choices from begin

  let knownSkillProficiencies = ["Animal Handling", "Survival"];
  let unknownSkillProficiencies = [
    ["Acrobatics", "Strength", "Dexterity"],
    ["Acrobatics", "Strength", "Dexterity"],
  ];
  let knownItemProficiencies = ["Flute"];
  let unknownItemProficiencies = [["Tinker's Tools", "Carpenter's Tools"]];
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
  let knownArmorAndWeapons = ["Longbow"];
  let unknownArmorAndWeapons = [
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
            knownSkillProficiencies={knownSkillProficiencies}
            unknownSkillProficiencies={unknownSkillProficiencies}
            knownItemProficiencies={knownItemProficiencies}
            unknownItemProficiencies={unknownItemProficiencies}
            knownArmorAndWeapons={knownArmorAndWeapons}
            unknownArmorAndWeapons={unknownArmorAndWeapons}
            knownLanguages={knownLanguages}
            unknownLanguages={unknownLanguages}
          />
        </div>
        <NavigateButton
          destination="/spells"
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
