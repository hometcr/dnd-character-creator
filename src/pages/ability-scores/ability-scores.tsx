import { AbilitiesContainer } from "./components/AbilitiesContainer";
import { RollDiceButton } from "./components/RollDiceButton";

export const AbilityScores = () => {
  const getAbilityScore = () => {
    let rolls = [];
    for (let i = 0; i < 4; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    rolls.sort();
    let AbilityScore = 0;
    for (let i = 0; i < 3; i++) {
      AbilityScore += rolls[i + 1];
    }
    return AbilityScore;
  };

  let scores: Number[] = [];
  const getAbilityScores = () => {
    for (let i = 0; i < 6; i++) {
      let AbilityScore = getAbilityScore();
      scores.push(AbilityScore);
    }
    return scores;
  };

  getAbilityScores();

  let scoresDisplay = scores.map((score) => <div className="scores-list-score">{String(score)}</div>);

  return (
    <div className="ability-scores-page">
      <div className="get-ability-scores-container">
        <h1 className="ability-scores-title">Step 2: Ability Scores</h1>
        <p className="ability-scores-description">
          Roll dice to get your ability scores, then choose which ability gets
          which score
        </p>
        <RollDiceButton />
        <div className="scores-list">
          <div className="scores-list-title">Scores: </div>
          <div className="scores-list-scores">
            {scoresDisplay}
          </div>
        </div>
      </div>
      <AbilitiesContainer scores={scores}/>
    </div>
  );
};