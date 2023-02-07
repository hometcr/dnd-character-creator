interface IProps {
  level: number;
  hp: number;
  ac: number;
  speed: number;
  initiative: number;
  proficiencyBonus: number;
  passivePerception: number;
  hitDice: (string | number)[];
}

export const Stats = (props: IProps) => {
  return (
    <div className="character-sheet-item">
      <div className="character-sheet-box-title">Stats</div>
      <div className="stats-box">
        <div className="stats-small-box">
          <div className="stats-label">Level</div>
          <div className="stat">{props.level}</div>
        </div>
        <div className="stats-small-box">
          <div className="stats-label">HP</div>
          <div className="stat">{props.hp}</div>
        </div>
        <div className="stats-small-box">
          <div className="stats-label">AC</div>
          <div className="stat">{props.ac}</div>
        </div>
        <div className="stats-small-box">
          <div className="stats-label">Speed</div>
          <div className="stat">{props.speed}</div>
        </div>
        <div className="stats-large-box">
          <div className="stats-label">Initiative</div>
          <div className="stat">{props.initiative}</div>
        </div>
        <div className="stats-large-box">
          <div className="stats-label">Proficiency Bonus</div>
          <div className="stat">{props.proficiencyBonus}</div>
        </div>
        <div className="stats-large-box">
          <div className="stats-label">Passive Perception</div>
          <div className="stat">{props.passivePerception}</div>
        </div>
        <div className="stats-large-box">
          <div className="stats-label">Hit Dice</div>
          <div className="stat">{props.hitDice}</div>
        </div>
      </div>
    </div>
  );
};
