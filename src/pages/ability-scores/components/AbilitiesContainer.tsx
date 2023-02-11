import { Ability } from "./Ability";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fillSlice } from "../../../features/abilityScores";
interface IProps {
  scores: Number[];
  setScores: Function;
}

interface IBonuses {
  Strength: Number;
  Charisma: Number;
  Dexterity: Number;
  Constitution: Number;
  Intelligence: Number;
  Wisdom: Number;
}

// grab real bonuses from data somehow
let bonuses = {
  Strength: 2,
  Charisma: 0,
  Dexterity: 0,
  Constitution: 1,
  Intelligence: 0,
  Wisdom: 0,
};
export interface ISelectedScores {
  Strength: Number | null;
  Dexterity: Number | null;
  Intelligence: Number | null;
  Wisdom: Number | null;
  Constitution: Number | null;
  Charisma: Number | null;
}
export const AbilitiesContainer = (props: IProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let initialSelectedScores = {
    Strength: null,
    Dexterity: null,
    Intelligence: null,
    Wisdom: null,
    Constitution: null,
    Charisma: null,
  };

  const [selectedScores, setSelectedScores] = useState<ISelectedScores>(
    initialSelectedScores
  );

  const checkIfScoresComplete = () => {
    if (props.scores.includes(0)) {
      return false;
    }
    const scoresCopy = [...props.scores];
    for (let ability in selectedScores) {
      let score = Number(selectedScores[ability as keyof ISelectedScores]);
      if (scoresCopy.includes(score)) {
        let index = scoresCopy.indexOf(score);
        scoresCopy.splice(index, 1);
      }
    }
    if (scoresCopy.length > 0) {
      return false;
    } else {
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
    let scoresComplete = checkIfScoresComplete();
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
