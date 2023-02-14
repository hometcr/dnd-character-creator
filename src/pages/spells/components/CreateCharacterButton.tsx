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
// import choices from "../../../features/choices";

interface IProps {
  knownCantrips: string[];
  selectedCantrips: string[];
  knownFirstLevelSpells: string[];
  selectedFirstLevelSpells: string[];
  knownPreparedSpells: string[];
  selectedPreparedSpells: string[];
}

interface ICharacterData {
  userId: string;
  name: string;
  race: string;
  class: string;
  background: string;
  level: number;
  proficiencyBonus: number;
  speed: number;
  hitDice: (string | number)[];
  initiative: number;
  passivePerception: number;
  hp: number;
  ac: number;
  savingThrowProficiencies: string[];
  skillProficiencies: string[];
  strengthScore: number;
  charismaScore: number;
  intelligenceScore: number;
  wisdomScore: number;
  dexterityScore: number;
  constitutionScore: number;
  armor: string[];
  weapons: string[];
  features: string[];
  itemProficiencies: string[];
  languages: string[];
  spellSlots: number;
  spellSaveDc: number;
  spellAttackModifier: number;
  cantrips: string[];
  knownSpells: string[];
  preparedSpells: string[];
  money: number[];
  items: string[];
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

  let allCantrips: string[] = [];
  let allFirstLevelSpells: string[] = [];
  let allPreparedSpells: string[] = [];

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
      // used in other calculations
      const dexterityModifier = getModifier(abilityScores.Dexterity);
      const wisdomModifier = getModifier(abilityScores.Wisdom);
      const constitutionModifier = getModifier(abilityScores.Constitution);
      const intelligenceModifier = getModifier(abilityScores.Intelligence);
      const charismaModifier = getModifier(abilityScores.Charisma)

      let passivePerception = 10 + wisdomModifier;
      if (choicesInfo.skillProficiencies.includes("Perception")) {
        passivePerception += 2;
      }

      let hp =
        constitutionModifier +
        (stats[beginningInfo.class as keyof IStats].baseHp ?? 0);
      if (stats[beginningInfo.race as keyof IStats].hpBonus) {
        hp += stats[beginningInfo.race as keyof IStats].hpBonus ?? 0;
      }

      let features: string[] = [];
      features = [
        ...(stats[beginningInfo.class as keyof IStats].features as string[]),
        ...(stats[beginningInfo.race as keyof IStats].features as string[]),
        ...(stats[beginningInfo.background as keyof IStats]
          .features as string[]),
      ];

      let spellSlots = 0
      if (beginningInfo.class == "Wizard") {
        spellSlots = 2
      } else if (beginningInfo.class == "Bard") {
        spellSlots = 2
      }

      let spellSaveDc = 0
      if (beginningInfo.class == "Wizard") {
        spellSaveDc += 8 + 2 + intelligenceModifier
      } else if (beginningInfo.class == "Bard") {
        spellSaveDc += 8 + 2 + charismaModifier
      }

      let spellAttackModifier = 0
      if (beginningInfo.class == "Wizard") {
        spellAttackModifier += 2 + intelligenceModifier
      } else if (beginningInfo.class == "Bard") {
        spellAttackModifier += 2 + charismaModifier
      }

      // not sure why this error is happening, but I can catch it here
      let knownFirstLevelSpells = props.knownFirstLevelSpells;
      if (knownFirstLevelSpells[0] == undefined) {
        knownFirstLevelSpells = [];
      }

      const newCharacter: ICharacterData = {
        userId: user.uid,
        name: beginningInfo.name,
        race: beginningInfo.race,
        class: beginningInfo.class,
        background: beginningInfo.background,
        level: 1,
        proficiencyBonus: 2,
        speed: Number(stats[beginningInfo.race as keyof IStats].speed),
        hitDice: stats[beginningInfo.class as keyof IStats].hitDice ?? [
          1,
          "d8",
        ],
        initiative: dexterityModifier,
        passivePerception: passivePerception,
        hp: hp,
        // calculate later : 10 + dex mod if no armor,
        // other options depending on armor
        ac: 14,
        savingThrowProficiencies: stats[beginningInfo.class as keyof IStats]
          .savingThrowProficiencies ?? [""],
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
        features: features,
        itemProficiencies: choicesInfo.itemProficiencies,
        languages: choicesInfo.languages,
        spellSlots: spellSlots,
        spellSaveDc: spellSaveDc,
        spellAttackModifier: spellAttackModifier,
        cantrips: allCantrips,
        knownSpells: knownFirstLevelSpells,
        preparedSpells: allPreparedSpells,
        money: stats[beginningInfo.background as keyof IStats].money ?? [
          0, 0, 0, 0,
        ],
        items: choicesInfo.items,
      };
      // make sure each field has the correct type!
      console.log(newCharacter);
      // await addDoc(charactersCollectionRef, newCharacter);
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
