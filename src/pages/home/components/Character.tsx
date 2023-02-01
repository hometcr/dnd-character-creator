import { ICharacter } from "./CharactersContainer"
import { ViewButton } from "./ViewButton"
import { DeleteButton } from "./DeleteButton"


interface IProps {
  character: ICharacter
}

export const Character = (props: IProps) => {

  const character = props.character

  return (
    <div className="character">
      <p>{character.name}</p>
      <div>
        <p>{character.race}</p>
        <p>{character.class}</p>
      </div>
      <div className="access-character-buttons">
        <ViewButton/>
        <DeleteButton/>
      </div>
    </div>
  );
}