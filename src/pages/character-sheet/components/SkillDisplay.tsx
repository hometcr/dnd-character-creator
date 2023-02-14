interface IProps {
  ability: string;
  abilityModifier: string;
  skillItems: string[];
  abilityScore: number;
  savingThrowDisplay: string;
}

export const SkillDisplay = (props: IProps) => {
  let skillItemsDisplay = props.skillItems.map((skillItem) => {
    return <div key={`${skillItem}`} className="skill-item">{skillItem}</div>;
  });

  return (
    <div className="skill-display">
      <div className="skill-ability-and-title">
        <div className="ability-title">{props.ability}</div>
        <div className="ability-modifier">{props.abilityModifier}</div>
        <div className="ability-score">{props.abilityScore}</div>
      </div>
      <div className="skill-items-display">
        <div className="skill-item">{`${props.savingThrowDisplay} Saving Throws`}</div>
        {skillItemsDisplay}
        </div>
    </div>
  );
};
