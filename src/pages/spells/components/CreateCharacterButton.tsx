import { fillSlice } from "../../../features/spells";
import { useDispatch } from "react-redux";
import { db } from "../../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { IRootState } from "../../../index";
import { stats, IStats } from "../../../assets/stats";
import { getModifier } from "../../../helpers/getModifier";
import choices from "../../../features/choices";

interface IProps {
  knownCantrips: String[];
  selectedCantrips: String[];
  knownFirstLevelSpells: String[];
  selectedFirstLevelSpells: String[];
  knownPreparedSpells: String[];
  selectedPreparedSpells: String[];
}

export const CreateCharacterButton = (props: IProps) => {
  // set up ability to push to global state
  const dispatch = useDispatch();
  // set up ability to access characters collection in db
  const charactersCollectionRef = collection(db, "characters");
  // grab info about logged-in user
  const [user] = useAuthState(auth);
  // grab remaining data from global state
  const beginningInfo = useSelector((state: IRootState) => state.begin.value);
  const abilityScores = useSelector(
    (state: IRootState) => state.abilityScores.value
  );
  const choicesInfo = useSelector((state: IRootState) => state.choices.value);

  let allCantrips: String[] = [];
  let allFirstLevelSpells: String[] = [];
  let allPreparedSpells: String[] = [];

  const fillSpellsSlice = () => {
    // combine pre-known and chosen items
    allCantrips = [...props.knownCantrips, ...props.selectedCantrips];
    allFirstLevelSpells = [
      ...props.knownFirstLevelSpells,
      ...props.selectedFirstLevelSpells,
    ];
    allPreparedSpells = [
      ...props.knownPreparedSpells,
      ...props.selectedPreparedSpells,
    ];

    // create sets of each list to help find duplicates
    let uniqueCantrips = new Set(allCantrips);
    let uniqueFirstLevelSpells = new Set(allFirstLevelSpells);
    let uniquePreparedSpells = new Set(allPreparedSpells);

    // if any duplicates are found, alert the user
    if (allCantrips.length != uniqueCantrips.size) {
      alert("Please choose unique cantrips");
    } else if (allFirstLevelSpells.length != uniqueFirstLevelSpells.size) {
      alert("Please choose unique first level spells");
    } else if (allPreparedSpells.length != uniquePreparedSpells.size) {
      alert("Please choose unique prepared spells");
    } else {
      // if no duplicates are found, fill the slice
      let spellsInfo = {
        cantrips: allCantrips,
        firstLevelSpells: allFirstLevelSpells,
        preparedSpells: allPreparedSpells,
      };
      dispatch(fillSlice(spellsInfo));
      // navigate("/spells");
    }
  };

  const createNewCharacter = async () => {
    if (user) {
      // used to calculate initiative
      const dexterityModifier = getModifier(abilityScores.Dexterity);

      const newCharacter = {
        userId: user.uid,
        name: beginningInfo.name,
        race: beginningInfo.race,
        class: beginningInfo.class,
        background: beginningInfo.background,
        level: 1,
        proficiencyBonus: 2,
        speed: stats[beginningInfo.race as keyof IStats].speed,
        hitDice: stats[beginningInfo.class as keyof IStats].hitDice,
        initiative: dexterityModifier,
        // calculate later : 10 + perception skill
        passivePerception: 0,
        // calculate later : grab base from class stats, bonus from race stats, and add con modifier
        hp: 0,
        // calculate later : 10 + dex mod if no armor,
        // other options depending on armor
        ac: 0,
        savingThrowProficiencies:
          stats[beginningInfo.class as keyof IStats].savingThrowProficiencies,
        skillProficiencies: choicesInfo.skillProficiencies,
        strengthScore: abilityScores.Strength,
        charismaScore: abilityScores.Charisma,
        intelligenceScore: abilityScores.Intelligence,
        wisdomScore: abilityScores.Wisdom,
        dexterityScore: abilityScores.Dexterity,
        constitutionScore: abilityScores.Constitution,
        // separate armor from weapons, then store here
        armor: [],
        weapons: [],
        // grab from all stats
        features: [],
        itemProficiencies: choicesInfo.itemProficiencies,
        languages: choicesInfo.languages,
        // calculate with mods per class
        spellSlots: 0,
        // calculate with mods per class
        spellSaveDc: 0,
        // calculate with mods per class
        spellAttackModifier: 0,
        cantrips: allCantrips,
        knownSpells: allFirstLevelSpells,
        preparedSpells: allPreparedSpells,
        money: stats[beginningInfo.background as keyof IStats].money,
        items: choicesInfo.items,
      };
      // make sure each field has the correct type!
      console.log(newCharacter)
      await addDoc(charactersCollectionRef, newCharacter);
    } else {
      alert("An unknown error has occured. Please try again later.");
    }
  };

  const onPageSubmit = () => {
    fillSpellsSlice();
    createNewCharacter();
  };
  return (
    <button className="create-character-button" onClick={onPageSubmit}>
      Next
    </button>
  );
};
