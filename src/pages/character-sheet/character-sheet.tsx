import { Stats } from "./components/Stats";
import { ProficienciesAndFeatures } from "./components/ProficienciesAndFeatures";
import { Spells } from "./components/Spells";
import { Skills } from "./components/Skills";
import { ArmorAndWeapons } from "./components/ArmorAndWeapons";
import { Items } from "./components/Items";


export const CharacterSheet = () => {
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
    abilityScores: {
      str: 2,
      con: 2,
      dex: 0,
      char: 1,
      wis: -1,
      int: 1,
    },
    skills: {
      "Str Saving Throws": 3,
      Athletics: 5,
      "Con Saving Throws": 3,
      "Dex Saving Throws": 0,
      Acrobatics: 1,
      "Sleight of Hand": -1,
      Stealth: -1,
      "Char Saving Throws": 1,
      Deception: 3,
      Intimidation: 3,
      Performance: 3,
      Persuasion: 5,
      "Wis Saving Throws": -1,
      "Animal Handling": -1,
      Insight: -1,
      Medicine: -1,
      Perception: -1,
      Survival: -1,
      "Int Saving Throws": 1,
      Arcana: 1,
      History: 1,
      Investigation: 3,
      Nature: 1,
      Religion: 1,
    }
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
        <Skills abilityScores={characterInfo.abilityScores} skills={characterInfo.skills}/>
        <ArmorAndWeapons />
        <Items />
      </div>
    </div>
  );
};
