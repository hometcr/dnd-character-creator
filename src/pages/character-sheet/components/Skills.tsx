import { SkillDisplay } from "./SkillDisplay";

interface ISkill {
  "Saving Throws"?: number;
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

interface IAbilityModifiers {
  Strength: number;
  Constitution: number;
  Wisdom: number;
  Intelligence: number;
  Charisma: number;
  Dexterity: number;
}
interface IProps {
  abilityModifiers: IAbilityModifiers;
  skills: ISkills;
}

export const Skills = (props: IProps) => {
  interface IAbilityScores {
    Strength: number;
    Constitution: number;
    Dexterity: number;
    Intelligence: number;
    Charisma: number;
    Wisdom: number;
  }

  const getModifier = (score: number) => {
    let modifier = 0;
    if (score > 10) {
      modifier = Math.floor((score - 10) / 2);
    } else {
      modifier = Math.floor((score - 9) / 2);
    }
    return modifier;
  };

  let abilityScores: IAbilityScores = { ...props.abilityModifiers };
  for (let ability in props.abilityModifiers) {
    let modifier = getModifier(
      props.abilityModifiers[ability as keyof IAbilityModifiers]
    );
    abilityScores[ability as keyof IAbilityScores] = modifier;
  }

  const createScoreDisplay = (score: number) => {
    let sign = "";
    if (score >= 0) {
      sign = "+";
    }
    return `${sign}${score}`;
  };

  const createSkillItem = (skill: string, score: number) => {
    let scoreDisplay = createScoreDisplay(score);
    return `${scoreDisplay} ${skill}`;
  };

  const createSkillItemList = (ability: String) => {
    let skillsDict = props.skills[ability as keyof ISkills];
    let skillItemList = [];
    for (let skill in skillsDict) {
      let newSkillItem = createSkillItem(
        skill,
        Number(skillsDict[skill as keyof ISkill])
      );
      skillItemList.push(newSkillItem);
    }
    return skillItemList;
  };

  let skillDisplays = () => {
    let skillDisplaysList = [];
    for (let ability in abilityScores) {
      let scoreDisplay = createScoreDisplay(
        abilityScores[ability as keyof IAbilityScores]
      );
      let skillItems = createSkillItemList(ability);
      skillDisplaysList.push(
        <SkillDisplay
          ability={String(ability)}
          abilityScore={scoreDisplay}
          skillItems={skillItems}
          abilityModifier={
            props.abilityModifiers[ability as keyof IAbilityModifiers]
          }
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
