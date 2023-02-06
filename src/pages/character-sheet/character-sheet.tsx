import { Stats } from "./components/Stats";
import { ProficienciesAndTraits } from "./components/ProficienciesAndTraits";
import { Spells } from "./components/Spells";
import { Skills } from "./components/Skills";
import { ArmorAndWeapons } from "./components/ArmorAndWeapons";
import { Items } from "./components/Items"

export const CharacterSheet = () => {
  let characterInfo = {
    name: "Hardwon Surefoot",
    class: "Fighter",
    race: "Human",
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
        <Stats />
        <ProficienciesAndTraits />
        <Spells />
        <Skills />
        <ArmorAndWeapons />
        <Items />
      </div>
    </div>
  );
};
