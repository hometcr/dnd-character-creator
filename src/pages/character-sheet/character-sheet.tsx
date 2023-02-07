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
        <Skills />
        <ArmorAndWeapons />
        <Items />
      </div>
    </div>
  );
};
