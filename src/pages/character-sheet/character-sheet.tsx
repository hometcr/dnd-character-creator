import { Stats } from "./components/Stats";
import { ProficienciesAndFeatures } from "./components/ProficienciesAndFeatures";
import { Spells } from "./components/Spells";
import { Skills } from "./components/Skills";
import { ArmorAndWeapons } from "./components/ArmorAndWeapons";
import { Items } from "./components/Items";
import { useParams } from "react-router-dom";
// test to get doc
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
  
    savingThrowProficiencies: [],
    skillProficiencies: [],
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
  
    money: [],
    items: [],
  }

  const [characterData, setCharacterData] = useState<ICharacterData>(
    initialCharacterData
  );

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


  const abilityScores =  {
    Strength: characterData.strengthScore,
    Constitution: characterData.constitutionScore,
    Dexterity: characterData.dexterityScore,
    Charisma: characterData.charismaScore,
    Wisdom: characterData.wisdomScore,
    Intelligence: characterData.intelligenceScore,
  }

  const skills = {
    Strength: { "Saving Throws": 3, Athletics: 5 },
    Constitution: { "Saving Throws": 3 },
    Dexterity: {
      "Saving Throws": 0,
      Acrobatics: 1,
      "Sleight of Hand": -1,
      Stealth: -1,
    },
    Charisma: {
      "Saving Throws": 1,
      Deception: 3,
      Intimidation: 3,
      Performance: 3,
      Persuasion: 5,
    },
    Wisdom: {
      "Saving Throws": -1,
      "Animal Handling": -1,
      Insight: -1,
      Medicine: -1,
      Perception: -1,
      Survival: -1,
    },
    Intelligence: {
      "Saving Throws": 1,
      Arcana: 1,
      History: 1,
      Investigation: 3,
      Nature: 1,
      Religion: 1,
    },
  }
  

  const characterInfo = {
    name: "Hardwon Surefoot",
    class: "Fighter",
    race: "Human",
    level: 1,
    hp: 15,
    ac: 14,
    speed: 25,
    initiative: 3,
    proficiencyBonus: 2,
    passivePerception: 14,
    hitDice: [1, "d10"],
    proficiencies: [
      "Heavy Armor",
      "Shields",
      "Simple Weapons",
      "Martial Weapons",
    ],
    languages: ["Common", "Dwarvish", "Elvish"],
    features: ["Rustic Hospitality", "Dueling", "Second Wind"],
    spellSlots: 4,
    spellSaveDc: 4,
    spellAttackMod: 4,
    cantrips: ["Fire Bolt", "Light", "Mending"],
    firstLevelSpells: ["Feather Fall", "Mage Armor", "Sleep"],
    abilityModifiers: {
      Strength: 14,
      Constitution: 15,
      Dexterity: 10,
      Charisma: 13,
      Wisdom: 8,
      Intelligence: 12,
    },
    skills: {
      Strength: { "Saving Throws": 3, Athletics: 5 },
      Constitution: { "Saving Throws": 3 },
      Dexterity: {
        "Saving Throws": 0,
        Acrobatics: 1,
        "Sleight of Hand": -1,
        Stealth: -1,
      },
      Charisma: {
        "Saving Throws": 1,
        Deception: 3,
        Intimidation: 3,
        Performance: 3,
        Persuasion: 5,
      },
      Wisdom: {
        "Saving Throws": -1,
        "Animal Handling": -1,
        Insight: -1,
        Medicine: -1,
        Perception: -1,
        Survival: -1,
      },
      Intelligence: {
        "Saving Throws": 1,
        Arcana: 1,
        History: 1,
        Investigation: 3,
        Nature: 1,
        Religion: 1,
      },
    },
    weapons: ["Javelin", "Longsword", "Dagger"],
    armor: ["Leather Armor"],
    money: { gp: 15 },
    items: ["Explorer's Pack", "Tinker's Tools", "Shovel", "Bag of Holding"],
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
        <Skills
          abilityModifiers={abilityScores}
          skills={characterInfo.skills}
        />
        <ArmorAndWeapons
          weapons={characterInfo.weapons}
          armor={characterInfo.armor}
        />
        <Items money={characterInfo.money} items={characterInfo.items} />
      </div>
    </div>
  );
};
