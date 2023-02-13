import { ListsContainer } from "../components/ListsContainer";
import { ItemDescription } from "../components/ItemDescription";
import bow from "../assets/bow.png";
import { NavigateButton } from "../components/NavigateButton";
import { useSelector } from "react-redux";
import { IRootState } from "../index";
import { useState, useEffect } from "react";
import { descriptions, IDescriptions } from "../assets/descriptions";
import { stats, IStats, ITypeStats } from "../assets/stats";

export const Choices = () => {
  const beginningInfo = useSelector((state: IRootState) => state.begin.value);

  const [recentlySelectedItem, setRecentlySelectedItem] = useState("");

  // initialize data for getChoicesFromBeginInfo()
  let knownSkillProficiencies: String[] = [];
  let unknownSkillProficiencies: String[][] = [];
  let knownItemProficiencies: String[] = [];
  let unknownItemProficiencies: String[][] = [];
  let knownItems: String[] = [];
  let unknownItems: String[][] = [];
  let knownArmorAndWeapons: String[] = [];
  let unknownArmorAndWeapons: String[][] = [];
  let knownLanguages: String[] = [];
  let unknownLanguages: String[][] = [];

  const getChoicesFromBeginInfo = () => {
    // fill knownSkillProficiencies
    const classKnownSkillProficiencies =
      stats[beginningInfo.class as keyof IStats].knownSkillProficiencies;
    const raceKnownSkillProficiencies =
      stats[beginningInfo.race as keyof IStats].knownSkillProficiencies;
    const backgroundKnownSkillProficiencies =
      stats[beginningInfo.background as keyof IStats].knownSkillProficiencies;
    if (classKnownSkillProficiencies) {
      knownSkillProficiencies.push(...classKnownSkillProficiencies);
    }
    if (raceKnownSkillProficiencies) {
      knownSkillProficiencies.push(...raceKnownSkillProficiencies);
    }
    if (backgroundKnownSkillProficiencies) {
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
    if (unknownSkillProficiencies.length == 0) {
      unknownSkillProficiencies = [[]];
    }
    // fill knownItemProficiencies
    const classKnownItemProficiencies =
      stats[beginningInfo.class as keyof IStats].knownItemProficiencies;
    const raceKnownItemProficiencies =
      stats[beginningInfo.race as keyof IStats].knownItemProficiencies;
    const backgroundKnownItemProficiencies =
      stats[beginningInfo.background as keyof IStats].knownItemProficiencies;
    if (classKnownItemProficiencies) {
      knownItemProficiencies.push(...classKnownItemProficiencies);
    }
    if (raceKnownItemProficiencies) {
      knownItemProficiencies.push(...raceKnownItemProficiencies);
    }
    if (backgroundKnownItemProficiencies) {
      knownItemProficiencies.push(...backgroundKnownItemProficiencies);
    }
    // fill unknownItemProficiencies
    const classUnknownItemProficiencies =
      stats[beginningInfo.class as keyof IStats].unknownItemProficiencies;
    const raceUnknownItemProficiencies =
      stats[beginningInfo.race as keyof IStats].unknownItemProficiencies;
    const backgroundUnknownItemProficiencies =
      stats[beginningInfo.background as keyof IStats].unknownItemProficiencies;
    if (classUnknownItemProficiencies) {
      unknownItemProficiencies.push(...classUnknownItemProficiencies);
    }
    if (raceUnknownItemProficiencies) {
      unknownItemProficiencies.push(...raceUnknownItemProficiencies);
    }
    if (backgroundUnknownItemProficiencies) {
      unknownItemProficiencies.push(...backgroundUnknownItemProficiencies);
    }
    if (unknownItemProficiencies.length == 0) {
      unknownItemProficiencies = [[]];
    }

    // fill knownItems
    const classKnownItems =
      stats[beginningInfo.class as keyof IStats].knownItems;
    const raceKnownItems = stats[beginningInfo.race as keyof IStats].knownItems;
    const backgroundKnownItems =
      stats[beginningInfo.background as keyof IStats].knownItems;
    if (classKnownItems) {
      knownItems.push(...classKnownItems);
    }
    if (raceKnownItems) {
      knownItems.push(...raceKnownItems);
    }
    if (backgroundKnownItems) {
      knownItems.push(...backgroundKnownItems);
    }
    // fill unknownItems
    const classUnknownItems =
      stats[beginningInfo.class as keyof IStats].unknownItems;
    const raceUnknownItems =
      stats[beginningInfo.race as keyof IStats].unknownItems;
    const backgroundUnknownItems =
      stats[beginningInfo.background as keyof IStats].unknownItems;
    if (classUnknownItems) {
      unknownItems = [...classUnknownItems];
    }
    if (raceUnknownItems) {
      unknownItems.push(...raceUnknownItems);
    }
    if (backgroundUnknownItems) {
      unknownItems.push(...backgroundUnknownItems);
    }
    if (unknownItems.length == 0) {
      unknownItems = [[]];
    }
    // fill knownLanguages
    const classKnownLanguages =
      stats[beginningInfo.class as keyof IStats].knownLanguages;
    const raceKnownLanguages =
      stats[beginningInfo.race as keyof IStats].knownLanguages;
    const backgroundKnownLanguages =
      stats[beginningInfo.background as keyof IStats].knownLanguages;
    if (classKnownLanguages) {
      knownLanguages.push(...classKnownLanguages);
    }
    if (raceKnownLanguages) {
      knownLanguages.push(...raceKnownLanguages);
    }
    if (backgroundKnownLanguages) {
      knownLanguages.push(...backgroundKnownLanguages);
    }
    // fill unknownLanguages
    const classUnknownLanguages =
      stats[beginningInfo.class as keyof IStats].unknownLanguages;
    const raceUnknownLanguages =
      stats[beginningInfo.race as keyof IStats].unknownLanguages;
    const backgroundUnknownLanguages =
      stats[beginningInfo.background as keyof IStats].unknownLanguages;
    if (classUnknownLanguages) {
      unknownLanguages = [...classUnknownLanguages];
    }
    if (raceUnknownLanguages) {
      unknownLanguages.push(...raceUnknownLanguages);
    }
    if (backgroundUnknownLanguages) {
      unknownLanguages.push(...backgroundUnknownLanguages);
    }
    if (unknownLanguages.length == 0) {
      unknownLanguages = [[]];
    }
    // fill knownArmorAndWeapons
    const classKnownArmorAndWeapons =
      stats[beginningInfo.class as keyof IStats].knownArmorAndWeapons;
    const raceKnownArmorAndWeapons =
      stats[beginningInfo.race as keyof IStats].knownArmorAndWeapons;
    const backgroundKnownArmorAndWeapons =
      stats[beginningInfo.background as keyof IStats].knownArmorAndWeapons;
    if (classKnownArmorAndWeapons) {
      knownArmorAndWeapons.push(...classKnownArmorAndWeapons);
    }
    if (raceKnownArmorAndWeapons) {
      knownArmorAndWeapons.push(...raceKnownArmorAndWeapons);
    }
    if (backgroundKnownArmorAndWeapons) {
      knownArmorAndWeapons.push(...backgroundKnownArmorAndWeapons);
    }
    // fill unknownArmorAndWeapons
    const classUnknownArmorAndWeapons =
      stats[beginningInfo.class as keyof IStats].unknownArmorAndWeapons;
    const raceUnknownArmorAndWeapons =
      stats[beginningInfo.race as keyof IStats].unknownArmorAndWeapons;
    const backgroundUnknownArmorAndWeapons =
      stats[beginningInfo.background as keyof IStats].unknownArmorAndWeapons;
    if (classUnknownArmorAndWeapons) {
      unknownArmorAndWeapons = [...classUnknownArmorAndWeapons];
    }
    if (raceUnknownArmorAndWeapons) {
      unknownArmorAndWeapons.push(...raceUnknownArmorAndWeapons);
    }
    if (backgroundUnknownArmorAndWeapons) {
      unknownArmorAndWeapons.push(...backgroundUnknownArmorAndWeapons);
    }
    if (unknownArmorAndWeapons.length == 0) {
      unknownArmorAndWeapons = [[]];
    }
  };

  getChoicesFromBeginInfo();

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
            setRecentlySelectedItem={setRecentlySelectedItem}
            knownEquipment={knownItems}
            unknownEquipment={unknownItems}
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
        <ItemDescription item={recentlySelectedItem} />
      </div>
    </div>
  );
};
