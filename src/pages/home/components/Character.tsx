import { ICharacter } from "./CharactersContainer"

interface IProps {
  character: ICharacter
}

export const Character = (props: IProps) => {

  const character = props.character

  return <div>{character.name}</div>;
}