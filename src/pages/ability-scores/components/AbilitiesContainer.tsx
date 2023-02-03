import { Ability } from "./Ability";
import { NavigateButton } from "../../../components/NavigateButton";

interface IProps {
  scores: Number[];
}

let bonuses = {
  Strength: 2,
  Charisma: 0,
  Dexterity: 0,
  Constitution: 1,
  Intelligence: 0,
  Wisdom: 0,
};

export const AbilitiesContainer = (props: IProps) => {
  let abilityScores = props.scores;

  return (
    <div className="abilities-container-etc">
      <div className="abilities-container">
        <div className="abilities-top-row">
          <Ability
            name="Strength"
            abilityScores={abilityScores}
            bonus={bonuses.Strength}
          />
          <Ability
            name="Wisdom"
            abilityScores={abilityScores}
            bonus={bonuses.Wisdom}
          />
          <Ability
            name="Charisma"
            abilityScores={abilityScores}
            bonus={bonuses.Charisma}
          />
        </div>
        <div className="abilities-bottom-row">
          <Ability
            name="Constitution"
            abilityScores={abilityScores}
            bonus={bonuses.Constitution}
          />
          <Ability
            name="Dexterity"
            abilityScores={abilityScores}
            bonus={bonuses.Dexterity}
          />
          <Ability
            name="Intelligence"
            abilityScores={abilityScores}
            bonus={bonuses.Intelligence}
          />
        </div>
        <p className="ability-score-note">
          {
            "*You have some score bonuses from your character choices in Step 1*"
          }
        </p>
      </div>
      <NavigateButton
        destination="/magic"
        text="Next"
        className="abilities-next-button"
      />
    </div>
  );
};
