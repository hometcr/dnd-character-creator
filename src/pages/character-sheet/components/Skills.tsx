import { SkillDisplay } from "./SkillDisplay";
import { getModifier } from "../../../helpers/getModifier";

interface ISkill {
  Athletics?: number;
  Acrobatics?: number;
  "Sleight of Hand"?: number;
  Stealth?: number;
  Deception?: number;
  Intimidation?: number;
  Performance?: number;
  Persuasion?: number;
  "Animal Handling"?: number;
  Insight?: number;
  Medicine?: number;
  Perception?: number;
  Survival?: number;
  Arcana?: number;
  History?: number;
  Investigation?: number;
  Nature?: number;
  Religion?: number;
}

interface ISkills {
  Strength: ISkill;
  Constitution: ISkill;
  Dexterity: ISkill;
  Charisma: ISkill;
  Wisdom: ISkill;
  Intelligence: ISkill;
}

interface IAbilityScores {
  Strength: number;
  Constitution: number;
  Wisdom: number;
  Intelligence: number;
  Charisma: number;
  Dexterity: number;
}
interface IProps {
  abilityScores: IAbilityScores;
  savingThrowProficiencies: String[];
  skillProficiencies: String[];
}

export const Skills = (props: IProps) => {
  let abilityModifiers: IAbilityScores = { ...props.abilityScores };
  for (let ability in props.abilityScores) {
    let modifier = getModifier(
      props.abilityScores[ability as keyof IAbilityScores]
    );
    abilityModifiers[ability as keyof IAbilityScores] = modifier;
  }

  // calculate saving throw based on prop
  const savingThrows = {
    Strength: abilityModifiers["Strength"],
    Intelligence: abilityModifiers["Intelligence"],
    Charisma: abilityModifiers["Charisma"],
    Dexterity: abilityModifiers["Dexterity"],
    Constitution: abilityModifiers["Constitution"],
    Wisdom: abilityModifiers["Wisdom"],
  }


   // add bonuses based on allSkillProficiencies
  const allSkills = {
    Athletics: abilityModifiers["Strength"],
    Acrobatics: abilityModifiers["Dexterity"],
    "Sleight of Hand": abilityModifiers["Dexterity"],
    Stealth: abilityModifiers["Dexterity"],

    Deception: abilityModifiers["Charisma"],
    Intimidation: abilityModifiers["Charisma"],
    Performance: abilityModifiers["Charisma"],
    Persuasion: abilityModifiers["Charisma"],

    "Animal Handling": abilityModifiers["Wisdom"],
    Insight: abilityModifiers["Wisdom"],
    Medicine: abilityModifiers["Wisdom"],
    Perception: abilityModifiers["Wisdom"],
    Survival: abilityModifiers["Wisdom"],

    Arcana: abilityModifiers["Intelligence"],
    History: abilityModifiers["Intelligence"],
    Investigation: abilityModifiers["Intelligence"],
    Nature: abilityModifiers["Intelligence"],
    Religion: abilityModifiers["Intelligence"],
  };

  const createModifierDisplay = (score: number) => {
    let sign = "";
    if (score >= 0) {
      sign = "+";
    }
    return `${sign}${score}`;
  };

  const savingThrowDisplays = {
    Strength: "",
    Charisma: "",
    Intelligence: "",
    Wisdom: "",
    Dexterity: "",
    Constitution: ""
  }
  for (let ability in savingThrows) {
    let throwDisplay = createModifierDisplay(savingThrows[ability as keyof ISkills])
    savingThrowDisplays[ability as keyof ISkills] = throwDisplay
  }

  const createSkillItem = (skill: string, score: number) => {
    let modifierDisplay = createModifierDisplay(score);
    return `${modifierDisplay} ${skill}`;
  };

  const createSkillItemList = (certainSkills: string[]) => {
    let skillItemList = []
    for (let skill of certainSkills) {
      let newSkillItem = createSkillItem(
        skill,
        Number(allSkills[skill as keyof ISkill])
      );
      skillItemList.push(newSkillItem);
    }
    return skillItemList;
  };

  let skillDisplays = () => {
    let skillDisplaysList = [];
    for (let ability in abilityModifiers) {
      let theseSkills: string[] = []
      if (ability == "Strength") {
        theseSkills = ["Athletics"]
      } else if (ability == "Wisdom") {
        theseSkills = ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"]
      } else if ( ability == "Charisma"
      ) {
        theseSkills = ["Deception", "Intimidation", "Performance", "Persuasion"]
      } else if (ability == "Intelligence") {
        theseSkills = ["Arcana", "History", "Investigation", "Nature", "Religion"]
      } else if (ability == "Dexterity") {
        theseSkills = ["Acrobatics", "Sleight of Hand", "Stealth"]
      }
      let modifierDisplay = createModifierDisplay(
        abilityModifiers[ability as keyof IAbilityScores]
      );
      let skillItems = createSkillItemList(theseSkills);
      skillDisplaysList.push(
        <SkillDisplay
          ability={String(ability)}
          abilityModifier={modifierDisplay}
          skillItems={skillItems}
          abilityScore={props.abilityScores[ability as keyof IAbilityScores]}
          key={ability}
          savingThrowDisplay={savingThrowDisplays[ability as keyof ISkills]}
        />
      );
    }
    return skillDisplaysList;
  };

  return (
    <div className="character-sheet-item">
      <div className="character-sheet-box-title">Skills</div>
      <div className="skills-box">{skillDisplays()}</div>
    </div>
  );
};
