import { AbilitiesContainer } from "./components/AbilitiesContainer";
import { useState } from "react";

export const AbilityScores = () => {
  let [abilityScores, setAbilityScores] = useState<Number[]>([
    0, 0, 0, 0, 0, 0,
  ]);
  let [scoresDisplay, setScoresDisplay] = useState<JSX.Element[]>([]);

  const getOneAbilityScore = () => {
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

  const getAbilityScores = () => {
    let scores: Number[] = [];
    for (let i = 0; i < 6; i++) {
      let AbilityScore = getOneAbilityScore();
      scores.push(AbilityScore);
    }
    return scores;
  };

  const getScoresDisplay = (scores: Number[]) => {
    let scoresDisplay = scores.map((score) => (
      <div className="scores-list-score">{String(score)}</div>
    ));
    return scoresDisplay;
  };

  const onDiceRoll = () => {
    let rolledScores = getAbilityScores();
    setAbilityScores(rolledScores);
    let newScoresDisplay = getScoresDisplay(rolledScores);
    setScoresDisplay(newScoresDisplay);
  };

  return (
    <div className="ability-scores-page">
      <div className="get-ability-scores-container">
        <h1 className="ability-scores-title">Step 2: Ability Scores</h1>
        <p className="ability-scores-description">
          Roll dice to get your ability scores, then choose which ability gets
          which score
        </p>
        <div className="roll-dice-container">
          <button onClick={onDiceRoll} className="roll-dice-button">
            Roll dice
          </button>
        </div>
        <div className="scores-list">
          <div className="scores-list-title">Scores: </div>
          <div className="scores-list-scores">{scoresDisplay}</div>
        </div>
      </div>
      <AbilitiesContainer scores={abilityScores} setScores={setAbilityScores}/>
    </div>
  );
};
