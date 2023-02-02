import { Character } from "./Character"


export interface ICharacter {
  "name": string,
  "class": string,
  "race": string
}

export const CharactersContainer = () => {

  


  const characters: ICharacter[] = [
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


  return (
    <div className="characters-container-box">
      <div className="characters-container">
        {characters.map((character: ICharacter) => (
            <Character character={character}/>
            ))}
      </div>
    </div>
  );
}