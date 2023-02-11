import { Ability } from "./Ability";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { fillSlice } from "../../../features/abilityScores";
import { IRootState } from '../../../index';
import { stats, IStats } from "../../../assets/stats"

export interface ISelectedScores {
  Strength: Number | null;
  Dexterity: Number | null;
  Intelligence: Number | null;
  Wisdom: Number | null;
  Constitution: Number | null;
  Charisma: Number | null;
}

interface IProps {
  scores: Number[];
  setScores: Function;
}

export const AbilitiesContainer = (props: IProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const beginningInfo = useSelector((state: IRootState) => state.begin.value);
  console.log(beginningInfo)

  const [selectedScores, setSelectedScores] = useState<ISelectedScores>({
    Strength: null,
    Dexterity: null,
    Intelligence: null,
    Wisdom: null,
    Constitution: null,
    Charisma: null,
  });

  // grab bonuses from data
  const getBonuses = () => {
    let bonuses = {
        Strength: 0,
        Charisma: 0,
        Dexterity: 0,
        Constitution: 0,
        Intelligence: 0,
        Wisdom: 0,
      };
    // if stats[beginningInfo.class as keyof IStats] (
    
  }
  console.log(stats[beginningInfo.class as keyof IStats])

  // grab real bonuses from data somehow
  let bonuses = {
    Strength: 2,
    Charisma: 0,
    Dexterity: 0,
    Constitution: 1,
    Intelligence: 0,
    Wisdom: 0,
  };

  const checkIfScoresIsComplete = () => {
    // if dice haven't been rolled yet, return false
    if (props.scores.includes(0)) {
      return false;
    }
    // remove each selected score from a list of all scores
    const scoresCopy = [...props.scores];
    for (let ability in selectedScores) {
      let score = Number(selectedScores[ability as keyof ISelectedScores]);
      if (scoresCopy.includes(score)) {
        let index = scoresCopy.indexOf(score);
        scoresCopy.splice(index, 1);
      }
    }
    // if all scores were not removed, return false
    if (scoresCopy.length > 0) {
      return false;
    } else {
      // if all scores were removed, return true
      return true;
    }
  };

  const fillAbilitiesSlice = () => {
    let scoresWithBonuses = { ...selectedScores };
    for (let score in scoresWithBonuses) {
      scoresWithBonuses[score as keyof ISelectedScores] =
        Number(scoresWithBonuses[score as keyof ISelectedScores]) +
        Number(bonuses[score as keyof ISelectedScores]);
    }
    dispatch(fillSlice(scoresWithBonuses));
  };

  const onPageSubmit = () => {
    let scoresComplete = checkIfScoresIsComplete();
    if (scoresComplete) {
      fillAbilitiesSlice();
      navigate("/choices");
    } else {
      alert("Please choose which ability gets each score");
    }
  };

  return (
    <div className="abilities-container-etc">
      <div className="abilities-container">
        <div className="abilities-top-row">
          <Ability
            name="Strength"
            scores={props.scores}
            bonus={bonuses.Strength}
            selectedScores={selectedScores}
            setSelectedScores={setSelectedScores}
          />
          <Ability
            name="Wisdom"
            scores={props.scores}
            bonus={bonuses.Wisdom}
            selectedScores={selectedScores}
            setSelectedScores={setSelectedScores}
          />
          <Ability
            name="Charisma"
            scores={props.scores}
            bonus={bonuses.Charisma}
            selectedScores={selectedScores}
            setSelectedScores={setSelectedScores}
          />
        </div>
        <div className="abilities-bottom-row">
          <Ability
            name="Constitution"
            scores={props.scores}
            bonus={bonuses.Constitution}
            selectedScores={selectedScores}
            setSelectedScores={setSelectedScores}
          />
          <Ability
            name="Dexterity"
            scores={props.scores}
            bonus={bonuses.Dexterity}
            selectedScores={selectedScores}
            setSelectedScores={setSelectedScores}
          />
          <Ability
            name="Intelligence"
            scores={props.scores}
            bonus={bonuses.Intelligence}
            selectedScores={selectedScores}
            setSelectedScores={setSelectedScores}
          />
        </div>
        <p className="ability-score-note">
          {
            "*You have some score bonuses from your character choices in Step 1*"
          }
        </p>
      </div>
      <button onClick={onPageSubmit} className="abilities-next-button">
        Next
      </button>
    </div>
  );
};
