import { Stats } from "./components/Stats";
import { ProficienciesAndTraits } from "./components/ProficienciesAndTraits";
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
        <ProficienciesAndTraits />
        <Spells />
        <Skills />
        <ArmorAndWeapons />
        <Items />
      </div>
    </div>
  );
};
