import { Character } from "./Character"


export interface ICharacter {
  "name": string,
  "class": string,
  "race": string
}

export const CharactersContainer = () => {

  


  const charactersData: ICharacter[] = [
    {
      "name": "Beverly Toegold",
      "class": "paladin",
      "race": "halfing"
    },
    {
      "name": "Hardwon Surefoot",
      "class": "fighter",
      "race": "human"
    },
    {
      "name": "Moonshine Cybin",
      "class": "druid",
      "race": "wood elf"
    },
  ]

  let characters;
  if (charactersData.length > 0) {
    characters = charactersData.map((character: ICharacter) => (
      <Character character={character}/>
      ))
  } else {
    characters = (
      <p className="no-characters-message">
        Once you've created characters,
        <br/>you can access them here
      </p>)
  }

  return (
    <div className="characters-container-box">
      <div className="characters-container">
        {characters}
      </div>
    </div>
  );
}