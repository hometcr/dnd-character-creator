interface IProps {
  ability: string;
  abilityScore: string;
  skillItems: string[];
}

export const SkillDisplay = (props: IProps) => {
  return (
    <div>
      <div>Ability: {props.ability}</div>
      <div>Score: {props.abilityScore}</div>
      <div>Skills: {props.skillItems}</div>
    </div>
  );
};
