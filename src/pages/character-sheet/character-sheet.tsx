import { Stats } from "./components/Stats";
import { ProficienciesAndFeatures } from "./components/ProficienciesAndFeatures";
import { Spells } from "./components/Spells";
import { Skills } from "./components/Skills";
import { ArmorAndWeapons } from "./components/ArmorAndWeapons";
import { Items } from "./components/Items";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ICharacterData } from "../home/home";

export const CharacterSheet = () => {
  const routeParams = useParams();
  console.log(routeParams.id);

  const initialCharacterData = {
    id: "",
    userId: 0,
    name: "",
    race: "",
    class: "",
    background: "",
    level: 0,
    proficiencyBonus: 0,
    speed: 0,
    hitDice: [],
    initiative: 0,
    passivePerception: 0,
    hp: 0,
    ac: 0,
    skillProficiencies: [],
    strengthSavingThrow: 0,
    constitutionSavingThrow: 0,
    wisdomSavingThrow: 0,
    intelligenceSavingThrow: 0,
    charismaSavingThrow: 0,
    dexteritySavingThrow: 0,
    strengthScore: 0,
    charismaScore: 0,
    intelligenceScore: 0,
    wisdomScore: 0,
    dexterityScore: 0,
    constitutionScore: 0,
    athleticsSkill: 0,
    acrobaticsSkill: 0,
    sleightOfHandSkill: 0,
    stealthSkill: 0,
    deceptionSkill: 0,
    intimidationSkill: 0,
    performanceSkill: 0,
    persuasionSkill: 0,
    animalHandlingSkill: 0,
    insightSkill: 0,
    medicineSkill: 0,
    perceptionSkill: 0,
    survivalSkill: 0,
    arcanaSkill: 0,
    historySkill: 0,
    investigationSkill: 0,
    natureSkill: 0,
    religionSkill: 0,
    armor: [],
    weapons: [],
    features: [],
    itemProficiencies: [],
    languages: [],
    spellSlots: 0,
    spellSaveDc: 0,
    spellAttackModifier: 0,
    cantrips: [],
    knownSpells: [],
    preparedSpells: [],
    money: [0, 0, 0, 0],
    items: [],
  };

  const [characterData, setCharacterData] =
    useState<ICharacterData>(initialCharacterData);

  const getCharacterData = async () => {
    if (routeParams.id) {
      const docRef = doc(db, "characters", routeParams.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const givenData = docSnap.data() as ICharacterData;
        setCharacterData(givenData);
      } else {
        console.log("No such document!");
      }
    }
  };

  useEffect(() => {
    getCharacterData();
  }, [routeParams]);

  const abilityScores = {
    Strength: characterData.strengthScore,
    Constitution: characterData.constitutionScore,
    Dexterity: characterData.dexterityScore,
    Charisma: characterData.charismaScore,
    Wisdom: characterData.wisdomScore,
    Intelligence: characterData.intelligenceScore,
  };

  const skills = {
    Strength: {
      "Saving Throws": characterData.strengthSavingThrow,
      Athletics: characterData.athleticsSkill,
    },
    Constitution: { "Saving Throws": characterData.constitutionSavingThrow },
    Dexterity: {
      "Saving Throws": characterData.dexteritySavingThrow,
      Acrobatics: characterData.acrobaticsSkill,
      "Sleight of Hand": characterData.sleightOfHandSkill,
      Stealth: characterData.stealthSkill,
    },
    Charisma: {
      "Saving Throws": characterData.charismaSavingThrow,
      Deception: characterData.deceptionSkill,
      Intimidation: characterData.intimidationSkill,
      Performance: characterData.performanceSkill,
      Persuasion: characterData.persuasionSkill,
    },
    Wisdom: {
      "Saving Throws": characterData.wisdomSavingThrow,
      "Animal Handling": characterData.animalHandlingSkill,
      Insight: characterData.insightSkill,
      Medicine: characterData.medicineSkill,
      Perception: characterData.perceptionSkill,
      Survival: characterData.survivalSkill,
    },
    Intelligence: {
      "Saving Throws": characterData.intelligenceSavingThrow,
      Arcana: characterData.arcanaSkill,
      History: characterData.historySkill,
      Investigation: characterData.investigationSkill,
      Nature: characterData.natureSkill,
      Religion: characterData.religionSkill,
    },
  };

  const money = {
    pp: characterData.money[0],
    sp: characterData.money[1],
    gp: characterData.money[2],
    cp: characterData.money[3],
  };

  // fix ability scores and modifiers names inside skills.tsx
  return (
    <div className="character-sheet-page">
      <div className="character-sheet-name-class-race">
        <div className="character-sheet-name">{characterData.name}</div>
        <div className="character-sheet-class-race">
          {" "}
          {characterData.race} {characterData.class}
        </div>
      </div>
      <div className="character-sheet-container">
        <Stats
          level={characterData.level}
          hp={characterData.hp}
          ac={characterData.ac}
          speed={characterData.speed}
          initiative={characterData.initiative}
          proficiencyBonus={characterData.proficiencyBonus}
          passivePerception={characterData.passivePerception}
          hitDice={characterData.hitDice}
        />
        <ProficienciesAndFeatures
          proficiencies={characterData.itemProficiencies}
          languages={characterData.languages}
          features={characterData.features}
        />
        <Spells
          spellSlots={characterData.spellSlots}
          spellSaveDc={characterData.spellSaveDc}
          spellAttackMod={characterData.spellAttackModifier}
          cantrips={characterData.cantrips}
          firstLevelSpells={characterData.knownSpells}
        />
        <Skills abilityScores={abilityScores} skills={skills} />
        <ArmorAndWeapons
          weapons={characterData.weapons}
          armor={characterData.armor}
        />
        <Items money={money} items={characterData.items} />
      </div>
    </div>
  );
};
