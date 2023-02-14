import { ListsContainer } from "../../components/ListsContainer";
import { ItemDescription } from "../../components/ItemDescription";
import book from "../../assets/book.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../index";
import { stats, IStats } from "../../assets/stats";
import { getModifier } from "../../helpers/getModifier";
import { options } from "../../assets/options";
import { CreateCharacterButton } from "./components/CreateCharacterButton";

export const Spells = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const beginningInfo = useSelector((state: IRootState) => state.begin.value);
  const abilityScores = useSelector(
    (state: IRootState) => state.abilityScores.value
  );
  const choicesInfo = useSelector((state: IRootState) => state.choices.value);
  const [recentlySelectedItem, setRecentlySelectedItem] = useState("");

  // console.log(beginningInfo);

  // initialize data for getSpellChoicesFromBeginInfo()
  let knownCantrips: string[] = [];
  let unknownCantrips: string[][] = [];
  let knownFirstLevelSpells: string[] = [];
  let unknownFirstLevelSpells: string[][] = [];
  let knownPreparedSpells: string[] = [];
  let unknownPreparedSpells: string[][] = [];

  const getSpellsFromBeginInfo = () => {
    // fill knownCantrips with unique values
    let nonUniqueItems: string[] = [];
    const classKnownCantrips =
      stats[beginningInfo.class as keyof IStats].knownCantrips;
    const raceKnownCantrips =
      stats[beginningInfo.race as keyof IStats].knownCantrips;
    const backgroundKnownCantrips =
      stats[beginningInfo.background as keyof IStats].knownCantrips;
    if (classKnownCantrips) {
      nonUniqueItems.push(...classKnownCantrips);
    }
    if (raceKnownCantrips) {
      nonUniqueItems.push(...raceKnownCantrips);
    }
    if (backgroundKnownCantrips) {
      nonUniqueItems.push(...backgroundKnownCantrips);
    }
    let uniqueItems = new Set(nonUniqueItems);
    let items = Array.from(uniqueItems);
    knownCantrips = [...items];

    // fill unknownCantrips
    const classUnknownCantrips =
      stats[beginningInfo.class as keyof IStats].unknownCantrips;
    const raceUnknownCantrips =
      stats[beginningInfo.race as keyof IStats].unknownCantrips;
    const backgroundUnknownCantrips =
      stats[beginningInfo.background as keyof IStats].unknownCantrips;
    if (classUnknownCantrips) {
      unknownCantrips = [...classUnknownCantrips];
    }
    if (raceUnknownCantrips) {
      unknownCantrips.push(...raceUnknownCantrips);
    }
    if (backgroundUnknownCantrips) {
      unknownCantrips.push(...backgroundUnknownCantrips);
    }
    if (unknownCantrips.length == 0) {
      unknownCantrips = [[]];
    }

    // fill knownFirstLevelSpells with unique values
    nonUniqueItems = [];
    const classKnownFirstLevelSpells =
      stats[beginningInfo.class as keyof IStats].knownFirstLevelSpells;
    const raceKnownFirstLevelSpells =
      stats[beginningInfo.race as keyof IStats].knownFirstLevelSpells;
    const backgroundKnownFirstLevelSpells =
      stats[beginningInfo.background as keyof IStats].knownFirstLevelSpells;
    if (classKnownFirstLevelSpells) {
      nonUniqueItems.push(...classKnownFirstLevelSpells);
    }
    if (raceKnownFirstLevelSpells) {
      nonUniqueItems.push(...raceKnownFirstLevelSpells);
    }
    if (backgroundKnownFirstLevelSpells) {
      nonUniqueItems.push(...backgroundKnownFirstLevelSpells);
    }
    uniqueItems = new Set(nonUniqueItems);
    items = Array.from(uniqueItems);
    knownFirstLevelSpells = [...items];

    // fill unknownFirstLevelSpells
    const classUnknownFirstLevelSpells =
      stats[beginningInfo.class as keyof IStats].unknownFirstLevelSpells;
    const raceUnknownFirstLevelSpells =
      stats[beginningInfo.race as keyof IStats].unknownFirstLevelSpells;
    const backgroundUnknownFirstLevelSpells =
      stats[beginningInfo.background as keyof IStats].unknownFirstLevelSpells;
    if (classUnknownFirstLevelSpells) {
      unknownFirstLevelSpells = [...classUnknownFirstLevelSpells];
    }
    if (raceUnknownFirstLevelSpells) {
      unknownFirstLevelSpells.push(...raceUnknownFirstLevelSpells);
    }
    if (backgroundUnknownFirstLevelSpells) {
      unknownFirstLevelSpells.push(...backgroundUnknownFirstLevelSpells);
    }
    if (unknownFirstLevelSpells.length == 0) {
      unknownFirstLevelSpells = [[]];
    }

    // if character is a wizard, fill unknownPreparedSpells with int+1 dropdowns
    if (beginningInfo.class == "Wizard") {
      const intelligenceModifier = getModifier(abilityScores.Intelligence);
      // minimum of one prepared spell
      const preparedSpellsCount = 1 + Math.max(0, intelligenceModifier);
      for (let i = 0; i < preparedSpellsCount; i++) {
        unknownPreparedSpells.push(options.spells.Wizard.firstLevel);
      }
    }
    if (unknownPreparedSpells.length == 0) {
      unknownPreparedSpells = [[]];
    }
  };
  getSpellsFromBeginInfo();

  // initialize initial states
  let initialSelectedCantrips: string[] = [];
  let initialSelectedFirstLevelSpells: string[] = [];
  let initialSelectedPreparedSpells: string[] = [];

  const getInitialStates = () => {
    for (let item of unknownCantrips) {
      initialSelectedCantrips.push(item[0]);
    }
    for (let item of unknownFirstLevelSpells) {
      initialSelectedFirstLevelSpells.push(item[0]);
    }
  };
  getInitialStates();

  // states have to be set all the way down here
  const [selectedCantrips, setSelectedCantrips] = useState(
    initialSelectedCantrips
  );
  const [selectedFirstLevelSpells, setSelectedFirstLevelSpells] = useState(
    initialSelectedFirstLevelSpells
  );
  const [selectedPreparedSpells, setSelectedPreparedSpells] = useState(
    initialSelectedPreparedSpells
  );

  return (
    <div className="spells-page">
      <div className="spells-without-description">
        <div className="spells-without-description-without-button">
          <div className="spells-book-and-title">
            <div className="counter-book"></div>
            <h2 className="spells-title">Step 4: Spells</h2>
            <img className="book-image" src={book} alt="magic spell book" />
          </div>
          <div className="spells-description">
            If you are a spellcaster, decide which spells to learn from the
            options provided. If needed, decide which of those spells to have
            prepared for your first session.
          </div>
          <ListsContainer
            page="spells"
            // states
            setRecentlySelectedItem={setRecentlySelectedItem}
            selectedCantrips={selectedCantrips}
            setSelectedCantrips={setSelectedCantrips}
            selectedFirstLevelSpells={selectedFirstLevelSpells}
            setSelectedFirstLevelSpells={setSelectedFirstLevelSpells}
            selectedPreparedSpells={selectedPreparedSpells}
            setSelectedPreparedSpells={setSelectedPreparedSpells}
            // spells lists
            knownCantrips={knownCantrips}
            unknownCantrips={unknownCantrips}
            knownFirstLevelSpells={knownFirstLevelSpells}
            unknownFirstLevelSpells={unknownFirstLevelSpells}
            knownPreparedSpells={knownPreparedSpells}
            unknownPreparedSpells={unknownPreparedSpells}
          />
        </div>
        <CreateCharacterButton
          knownCantrips={knownCantrips}
          selectedCantrips={selectedCantrips}
          knownFirstLevelSpells={knownFirstLevelSpells}
          selectedFirstLevelSpells={selectedFirstLevelSpells}
          knownPreparedSpells={knownPreparedSpells}
          selectedPreparedSpells={selectedPreparedSpells}
        />
      </div>
      <div className="spells-description-container">
        <ItemDescription item={recentlySelectedItem} />
      </div>
    </div>
  );
};
