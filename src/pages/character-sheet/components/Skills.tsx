import { isPropertySignature } from "typescript";
import { SkillDisplay } from "./SkillDisplay";

export interface ISkills {
  "Str Saving Throws": number;
  "Athletics": number;
  "Con Saving Throws": number;
  "Dex Saving Throws": number;
  Acrobatics: number;
  "Sleight of Hand": number;
  Stealth: number;
  "Char Saving Throws": number;
  Deception: number;
  Intimidation: number;
  Performance: number;
  Persuasion: number;
  "Wis Saving Throws": number;
  "Animal Handling": number;
  Insight: number;
  Medicine: number;
  Perception: number;
  Survival: number;
  "Int Saving Throws": number;
  Arcana: number;
  History: number;
  Investigation: number;
  Nature: number;
  Religion: number;
}

export interface IAbilityScores {
  str: number;
  con: number;
  wis: number;
  int: number;
  char: number;
  dex: number;
}
interface IProps {
  abilityScores: IAbilityScores;
  skills: ISkills;
}


export const Skills = (props: IProps) => {

  const createScoreDisplay = (score: number) => {
    let sign = "+";
    if (score < 0) {
      sign = "-";
    }
    return `${sign}${score}`
  }

  const createSkillItem = (skill: string, score: number) => {
    let scoreDisplay = createScoreDisplay(score)
    return `${scoreDisplay} ${skill}`;
  };

  const createSkillItemList = (skills: string[]) => {
    let skillItemList = [];
    for (let skill of skills) {
      let newSkillItem = createSkillItem(
        skill,
        props.skills[skill as keyof ISkills]
      );
      skillItemList.push(newSkillItem);
    }
    return skillItemList;
  };

  let strSkillItems = createSkillItemList(["Str Saving Throws", "Athletics"]);
  let strScoreDisplay = createScoreDisplay(props.abilityScores.str)

  return (
    <div className="character-sheet-item">
      <div className="character-sheet-box-title">Skills</div>
      <div className="skills-box">
        <SkillDisplay
          ability="Strength"
          abilityScore={strScoreDisplay}
          skillItems={strSkillItems}
        />
      </div>
    </div>
  );
};
