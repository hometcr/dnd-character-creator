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

  const [characterData, setCharacterData] = useState<ICharacterData | null>(
    null
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

  let characterInfo = {
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

  return (
    <div className="character-sheet-page">
      <div className="character-sheet-name-class-race">
        <div className="character-sheet-name">{characterInfo.name}</div>
        <div className="character-sheet-class-race">
          {" "}
          {characterInfo.race} {characterInfo.class}
        </div>
      </div>
      <div className="character-sheet-container">
        <Stats
          level={characterInfo.level}
          hp={characterInfo.hp}
          ac={characterInfo.ac}
          speed={characterInfo.speed}
          initiative={characterInfo.initiative}
          proficiencyBonus={characterInfo.proficiencyBonus}
          passivePerception={characterInfo.passivePerception}
          hitDice={characterInfo.hitDice}
        />
        <ProficienciesAndFeatures
          proficiencies={characterInfo.proficiencies}
          languages={characterInfo.languages}
          features={characterInfo.features}
        />
        <Spells
          spellSlots={characterInfo.spellSlots}
          spellSaveDc={characterInfo.spellSaveDc}
          spellAttackMod={characterInfo.spellAttackMod}
          cantrips={characterInfo.cantrips}
          firstLevelSpells={characterInfo.firstLevelSpells}
        />
        <Skills
          abilityModifiers={characterInfo.abilityModifiers}
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
