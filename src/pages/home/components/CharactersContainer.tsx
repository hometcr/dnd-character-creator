import { Character } from "./Character";
import { ICharacter } from "../home";

interface IProps {
  characters: ICharacter[];
}

export const CharactersContainer = (props: IProps) => {
  let characters;
  if (props.characters.length > 0) {
    characters = props.characters.map((character: ICharacter) => (
      <Character key={`${character}`} character={character} />
    ));
  } else {
    characters = (
      <p className="no-characters-message">
        Once you've created characters,
        <br />
        you can access them here
      </p>
    );
  }

  return (
    <div className="characters-container-box">
      <div className="characters-container">{characters}</div>
    </div>
  );
};
