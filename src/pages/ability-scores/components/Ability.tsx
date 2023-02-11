interface IProps {
  name: string;
  scores: Number[];
  bonus: Number;
}

export const Ability = (props: IProps) => {
  let scoreOptions = (
    <select className="ability-score-select">
      <option></option>
    </select>
  );
  if (!props.scores.includes(0)) {
    scoreOptions = (
      <select className="ability-score-select">
        <option selected></option>
        <option>{String(props.scores[0])}</option>
        <option>{String(props.scores[1])}</option>
        <option>{String(props.scores[2])}</option>
        <option>{String(props.scores[3])}</option>
        <option>{String(props.scores[4])}</option>
        <option>{String(props.scores[5])}</option>
      </select>
    );
  }

  return (
    <div className="ability">
      <h2>{props.name}</h2>
      <div className="choose-score-with-bonus">
        {scoreOptions}
        <div className="plus-sign">+</div>
        <div className="ability-score-bonus">{String(props.bonus)}</div>
      </div>
    </div>
  );
};
