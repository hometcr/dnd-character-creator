interface IProps {
  name: string;
  abilityScores: Number[];
  bonus: Number;
}

export const Ability = (props: IProps) => {
  return (
    <div className="ability">
      <h2>{props.name}</h2>
      <div className="choose-score-with-bonus">
        <select className="ability-score-select">
          <option selected></option>
          <option>{String(props.abilityScores[0])}</option>
          <option>{String(props.abilityScores[1])}</option>
          <option>{String(props.abilityScores[2])}</option>
          <option>{String(props.abilityScores[3])}</option>
          <option>{String(props.abilityScores[4])}</option>
          <option>{String(props.abilityScores[5])}</option>
        </select>
        <div className="plus-sign">+</div>
        <div className="ability-score-bonus">{String(props.bonus)}</div>
      </div>
    </div>
  );
};
