import { ListsContainer } from "../components/ListsContainer";
import { ItemDescription } from "../components/ItemDescription";
import bow from "../assets/bow.png";
import { useSelector } from "react-redux";
import { IRootState } from "../index";
import { useState } from "react";
import { stats, IStats } from "../assets/stats";
import { useDispatch } from "react-redux";
import { fillSlice } from "../features/choices";
import { useNavigate } from "react-router-dom";

export const Choices = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const beginningInfo = useSelector((state: IRootState) => state.begin.value);
  const [recentlySelectedItem, setRecentlySelectedItem] = useState("");

  // initialize data for getChoicesFromBeginInfo()
  let knownSkillProficiencies: string[] = [];
  let unknownSkillProficiencies: string[][] = [];
  let knownItemProficiencies: string[] = [];
  let unknownItemProficiencies: string[][] = [];
  let knownItems: string[] = [];
  let unknownItems: string[][] = [];
  let knownArmorAndWeapons: string[] = [];
  let unknownArmorAndWeapons: string[][] = [];
  let knownLanguages: string[] = [];
  let unknownLanguages: string[][] = [];

  const getChoicesFromBeginInfo = () => {
    // fill knownSkillProficiencies with unique values
    let nonUniqueItems: string[] = [];
    const classKnownSkillProficiencies =
      stats[beginningInfo.class as keyof IStats].knownSkillProficiencies;
    const raceKnownSkillProficiencies =
      stats[beginningInfo.race as keyof IStats].knownSkillProficiencies;
    const backgroundKnownSkillProficiencies =
      stats[beginningInfo.background as keyof IStats].knownSkillProficiencies;
    if (classKnownSkillProficiencies) {
      nonUniqueItems.push(...classKnownSkillProficiencies);
    }
    if (raceKnownSkillProficiencies) {
      nonUniqueItems.push(...raceKnownSkillProficiencies);
    }
    if (backgroundKnownSkillProficiencies) {
      nonUniqueItems.push(...backgroundKnownSkillProficiencies);
    }
    let uniqueItems = new Set(nonUniqueItems);
    let items = Array.from(uniqueItems);
    knownSkillProficiencies = [...items];

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

    // fill knownItemProficiencies with unique values
    nonUniqueItems = [];
    const classKnownItemProficiencies =
      stats[beginningInfo.class as keyof IStats].knownItemProficiencies;
    const raceKnownItemProficiencies =
      stats[beginningInfo.race as keyof IStats].knownItemProficiencies;
    const backgroundKnownItemProficiencies =
      stats[beginningInfo.background as keyof IStats].knownItemProficiencies;
    if (classKnownItemProficiencies) {
      nonUniqueItems.push(...classKnownItemProficiencies);
    }
    if (raceKnownItemProficiencies) {
      nonUniqueItems.push(...raceKnownItemProficiencies);
    }
    if (backgroundKnownItemProficiencies) {
      nonUniqueItems.push(...backgroundKnownItemProficiencies);
    }
    uniqueItems = new Set(nonUniqueItems);
    items = Array.from(uniqueItems);
    knownItemProficiencies = [...items];

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

    // fill knownItems with unique values
    nonUniqueItems = [];
    const classKnownItems =
      stats[beginningInfo.class as keyof IStats].knownItems;
    const raceKnownItems = stats[beginningInfo.race as keyof IStats].knownItems;
    const backgroundKnownItems =
      stats[beginningInfo.background as keyof IStats].knownItems;
    if (classKnownItems) {
      nonUniqueItems.push(...classKnownItems);
    }
    if (raceKnownItems) {
      nonUniqueItems.push(...raceKnownItems);
    }
    if (backgroundKnownItems) {
      nonUniqueItems.push(...backgroundKnownItems);
    }
    uniqueItems = new Set(nonUniqueItems);
    items = Array.from(uniqueItems);
    knownItems = [...items];

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

    // fill knownLanguages with unique values
    nonUniqueItems = [];
    const classKnownLanguages =
      stats[beginningInfo.class as keyof IStats].knownLanguages;
    const raceKnownLanguages =
      stats[beginningInfo.race as keyof IStats].knownLanguages;
    const backgroundKnownLanguages =
      stats[beginningInfo.background as keyof IStats].knownLanguages;
    if (classKnownLanguages) {
      nonUniqueItems.push(...classKnownLanguages);
    }
    if (raceKnownLanguages) {
      nonUniqueItems.push(...raceKnownLanguages);
    }
    if (backgroundKnownLanguages) {
      nonUniqueItems.push(...backgroundKnownLanguages);
    }
    uniqueItems = new Set(nonUniqueItems);
    items = Array.from(uniqueItems);
    knownLanguages = [...items];

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

    // fill knownArmorAndWeapons with unique values
    nonUniqueItems = [];
    const classKnownArmorAndWeapons =
      stats[beginningInfo.class as keyof IStats].knownArmorAndWeapons;
    const raceKnownArmorAndWeapons =
      stats[beginningInfo.race as keyof IStats].knownArmorAndWeapons;
    const backgroundKnownArmorAndWeapons =
      stats[beginningInfo.background as keyof IStats].knownArmorAndWeapons;
    if (classKnownArmorAndWeapons) {
      nonUniqueItems.push(...classKnownArmorAndWeapons);
    }
    if (raceKnownArmorAndWeapons) {
      nonUniqueItems.push(...raceKnownArmorAndWeapons);
    }
    if (backgroundKnownArmorAndWeapons) {
      nonUniqueItems.push(...backgroundKnownArmorAndWeapons);
    }
    uniqueItems = new Set(nonUniqueItems);
    items = Array.from(uniqueItems);
    knownArmorAndWeapons = [...items];

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

  // initialize initial states
  let initialSelectedEquipment: string[] = [];
  let initialSelectedLanguages: string[] = [];
  let initialSelectedSkillProficiencies: string[] = [];
  let initialSelectedArmorAndWeapons: string[] = [];
  let initialSelectedItemProficiencies: string[] = [];

  const getInitialStates = () => {
    for (let item of unknownItems) {
      initialSelectedEquipment.push(item[0]);
    }
    for (let item of unknownLanguages) {
      initialSelectedLanguages.push(item[0]);
    }
    for (let item of unknownSkillProficiencies) {
      initialSelectedSkillProficiencies.push(item[0]);
    }
    for (let item of unknownItemProficiencies) {
      initialSelectedItemProficiencies.push(item[0]);
    }
    for (let item of unknownArmorAndWeapons) {
      initialSelectedArmorAndWeapons.push(item[0]);
    }
  };
  getInitialStates();

  // states have to be set all the way down here
  const [selectedSkillProficiencies, setSelectedSkillProficiencies] = useState(
    initialSelectedSkillProficiencies
  );
  const [selectedEquipment, setSelectedEquipment] = useState(
    initialSelectedEquipment
  );
  const [selectedItemProficiencies, setSelectedItemProficiencies] = useState(
    initialSelectedItemProficiencies
  );
  const [selectedLanguages, setSelectedLanguages] = useState(
    initialSelectedLanguages
  );
  const [selectedArmorAndWeapons, setSelectedArmorAndWeapons] = useState(
    initialSelectedArmorAndWeapons
  );

  const fillChoicesSlice = () => {
    // combine pre-known and chosen items
    let allSkillProficiencies = [
      ...knownSkillProficiencies,
      ...selectedSkillProficiencies,
    ];
    let allItems = [...knownItems, ...selectedEquipment];
    let allLanguages = [...knownLanguages, ...selectedLanguages];
    let allItemProficiencies = [
      ...knownItemProficiencies,
      ...selectedItemProficiencies,
    ];
    let allArmorAndWeapons = [
      ...knownArmorAndWeapons,
      ...selectedArmorAndWeapons,
    ];

    // create sets of each list to help find duplicates
    let uniqueSkillProficiencies = new Set(allSkillProficiencies);
    let uniqueItemProficiencies = new Set(allItemProficiencies);
    let uniqueItems = new Set(allItems);
    let uniqueLanguages = new Set(allLanguages);
    let uniqueArmorAndWeapons = new Set(allArmorAndWeapons);

    // if any duplicates are found, alert the user
    if (allSkillProficiencies.length != uniqueSkillProficiencies.size) {
      alert("Please choose unique skill proficiencies");
    } else if (allItemProficiencies.length != uniqueItemProficiencies.size) {
      alert("Please choose unique item proficiencies");
    } else if (allItems.length != uniqueItems.size) {
      alert("Please choose unique equipment");
    } else if (allLanguages.length != uniqueLanguages.size) {
      alert("Please choose unique languages");
    } else if (allArmorAndWeapons.length != uniqueArmorAndWeapons.size) {
      alert("Please choose unique armor & weapons");
    } else {
      // if no duplicates are found, fill the slice
      let choicesInfo = {
        skillProficiencies: allSkillProficiencies,
        itemProficiencies: allItemProficiencies,
        items: allItems,
        armorAndWeapons: allArmorAndWeapons,
        languages: allLanguages,
      };
      dispatch(fillSlice(choicesInfo));
      navigate("/spells");
    }
  };

  const onPageSubmit = () => {
    fillChoicesSlice();
  };

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
            // states
            setRecentlySelectedItem={setRecentlySelectedItem}
            selectedSkillProficiencies={selectedSkillProficiencies}
            setSelectedSkillProficiencies={setSelectedSkillProficiencies}
            selectedItemProficiencies={selectedItemProficiencies}
            setSelectedItemProficiencies={setSelectedItemProficiencies}
            selectedEquipment={selectedEquipment}
            setSelectedEquipment={setSelectedEquipment}
            selectedLanguages={selectedLanguages}
            setSelectedLanguages={setSelectedLanguages}
            selectedArmorAndWeapons={selectedArmorAndWeapons}
            setSelectedArmorAndWeapons={setSelectedArmorAndWeapons}
            // items lists
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
        <button className="choices-next-button" onClick={onPageSubmit}>
          Next
        </button>
      </div>
      <div className="choices-description-container">
        <ItemDescription item={recentlySelectedItem} />
      </div>
    </div>
  );
};
