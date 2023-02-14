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

  const initialCharacterData = {
    id: "",
    userId: "",
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
    savingThrowProficiencies: [],
    strengthScore: 0,
    charismaScore: 0,
    intelligenceScore: 0,
    wisdomScore: 0,
    dexterityScore: 0,
    constitutionScore: 0,
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
        const givenData = docSnap.data() as ICharacterData;
        setCharacterData(givenData);
      } else {
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


  const money = {
    pp: characterData.money[0],
    sp: characterData.money[1],
    gp: characterData.money[2],
    cp: characterData.money[3],
  };

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
        <Skills abilityScores={abilityScores} savingThrowProficiencies={characterData.savingThrowProficiencies} skillProficiencies={characterData.skillProficiencies}/>
        <ArmorAndWeapons
          weapons={characterData.weapons}
          armor={characterData.armor}
        />
        <Items money={money} items={characterData.items} />
      </div>
    </div>
  );
};
