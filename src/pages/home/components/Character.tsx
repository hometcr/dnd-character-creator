import { ICharacter } from "../home";
import { ViewButton } from "./ViewButton";
import { DeleteButton } from "./DeleteButton";
import { titleCase } from "../../../helpers/titleCase";
import { NavigateButton } from "../../../components/NavigateButton";

interface IProps {
  character: ICharacter;
}

export const Character = (props: IProps) => {
  const character = props.character;

  // make title case - can move somewhere more useful later
  const characterName = titleCase(character.name);
  const characterClass = titleCase(character.class);
  const characterRace = titleCase(character.race);

  return (
    <div className="character">
      <div>
        <div className="character-name">{characterName}</div>
        <div className="race-and-class">
          {characterRace} {characterClass}
        </div>
      </div>
      <div className="access-character-buttons">
        <NavigateButton text="View" destination={`/character-sheet/${props.character.id}`} className="access-character-button"/>
        <DeleteButton />
      </div>
    </div>
  );
};
