import { ISelectedScores } from "./AbilitiesContainer";
interface IProps {
  name: string;
  scores: Number[];
  bonus: Number;
  selectedScores: ISelectedScores;
  setSelectedScores: Function;
}

export const Ability = (props: IProps) => {
  const updateSelectedScores = (e: React.SyntheticEvent<EventTarget>) => {
    const scoreInput = (e.target as HTMLInputElement).value;
    let newScores = { ...props.selectedScores };
    newScores[props.name as keyof ISelectedScores] = Number(scoreInput);
    props.setSelectedScores(newScores);
  };

  let value = "";
  if (props.selectedScores[props.name as keyof ISelectedScores]) {
    value = String(props.selectedScores[props.name as keyof ISelectedScores]);
  }

  let scoreOptions = (
    <select className="ability-score-select">
      <option></option>
    </select>
  );
  if (!props.scores.includes(0)) {
    scoreOptions = (
      <select
        className="ability-score-select"
        value={value}
        onChange={updateSelectedScores}
      >
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
