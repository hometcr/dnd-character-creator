import { ListsContainer } from "../components/ListsContainer";
import { ItemDescription } from "../components/ItemDescription";
import bow from "../assets/bow.png";
import { NavigateButton } from "../components/NavigateButton";
import { useSelector } from "react-redux";
import { IRootState } from "../index";
import { useState } from "react";
import { descriptions, IDescriptions } from "../assets/descriptions";
import { stats, IStats, ITypeStats } from "../assets/stats";

export const Choices = () => {
  const beginningInfo = useSelector((state: IRootState) => state.begin.value);

  // change to update whenever a dropdown is changed
  let [selectedItem, setSelectedItem] = useState("");

  // initialize data for getChoicesFromBeginInfo()
  let knownSkillProficiencies: String[] = [];
  let unknownSkillProficiencies: String[][] = [[]];
  let knownItemProficiencies: String[] = [];
  let unknownItemProficiencies: String[][] = [[]];
  let knownEquipment: String[] = [];
  let unknownEquipment: String[][] = [[]];
  let knownArmorAndWeapons: String[] = [];
  let unknownArmorAndWeapons: String[][] = [[]];
  let knownLanguages: String[] = [];
  let unknownLanguages: String[][] = [[]];

  const fillLists = () => {
    // fill knownSkillProficiencies
    const classKnownSkillProficiencies =
      stats[beginningInfo.class as keyof IStats].knownSkillProficiencies;
    const raceKnownSkillProficiencies =
      stats[beginningInfo.race as keyof IStats].knownSkillProficiencies;
    const backgroundKnownSkillProficiencies =
      stats[beginningInfo.background as keyof IStats].knownSkillProficiencies;
      console.log(stats[beginningInfo.background as keyof IStats].knownSkillProficiencies)
    if (classKnownSkillProficiencies) {
      knownSkillProficiencies.push(...classKnownSkillProficiencies);
    }
    if (raceKnownSkillProficiencies) {
      knownSkillProficiencies.push(...raceKnownSkillProficiencies);
    }
    if (backgroundKnownSkillProficiencies) {
      console.log(backgroundKnownSkillProficiencies)
      knownSkillProficiencies.push(...backgroundKnownSkillProficiencies);
    }
    // fill unknownSkillProficiencies
    const classUnknownSkillProficiencies =
      stats[beginningInfo.class as keyof IStats].unknownSkillProficiencies;
    const raceUnknownSkillProficiencies =
      stats[beginningInfo.race as keyof IStats].unknownSkillProficiencies;
    const backgroundUnknownSkillProficiencies =
      stats[beginningInfo.background as keyof IStats].unknownSkillProficiencies;
    if (classUnknownSkillProficiencies) {
      unknownSkillProficiencies = [...classUnknownSkillProficiencies];
    }
    if (raceUnknownSkillProficiencies) {
      unknownSkillProficiencies.push(...raceUnknownSkillProficiencies);
    }
    if (backgroundUnknownSkillProficiencies) {
      unknownSkillProficiencies.push(...backgroundUnknownSkillProficiencies);
    }
  }

  fillLists()
  // console.log(knownSkillProficiencies);
  // console.log("hello")

  // let knownSkillProficiencies = ["Animal Handling", "Survival"];
  // let unknownSkillProficiencies = [
  //   ["Acrobatics", "Strength", "Dexterity"],
  //   ["Acrobatics", "Strength", "Dexterity"],
  // ];
  // let knownItemProficiencies = ["Flute"];
  // let unknownItemProficiencies = [["Tinker's Tools", "Carpenter's Tools"]];
  // let knownEquipment = ["Shovel", "Iron Pot", "Common Clothes"];
  // let unknownEquipment = [
  //   ["Explorer's Pack", "Dungeoneer's Pack"],
  //   [
  //     "Calligrapher's Supplies",
  //     "Carpenter's Tools",
  //     "Cook's Utensils",
  //     "Mason's Tools",
  //     "Tinker's Tools",
  //   ],
  // ];
  // let knownArmorAndWeapons = ["Longbow"];
  // let unknownArmorAndWeapons = [
  //   ["Shield", "Axe"],
  //   ["Light Crossbow", "Javelin"],
  // ];
  // let knownLanguages = ["Common", "Dwarvish"];
  // let unknownLanguages = [[]];

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
