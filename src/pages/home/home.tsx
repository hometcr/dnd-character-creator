import { NavigateButton } from "../../components/NavigateButton";
import { CharactersContainer } from "./components/CharactersContainer";
import witch from "../../assets/witch.jpg";

export interface ICharacter {
  name: string;
  class: string;
  race: string;
}

export const Home = () => {
  const user_is_logged_in = true;

  const charactersData: ICharacter[] = [
    {
      name: "Beverly Toegold",
      class: "paladin",
      race: "halfing",
    },
    {
      name: "Hardwon Surefoot",
      class: "fighter",
      race: "human",
    },
    {
      name: "Moonshine Cybin",
      class: "druid",
      race: "wood elf",
    },
  ];

  let newCharacterButton = <></>
  if (charactersData.length > 2) {
    newCharacterButton = (
      <div>To create a new character, please please make space by deleting an old one</div>
    )
  } else {
    newCharacterButton=(
      <NavigateButton
        className="new-character-button"
        destination="/create"
        text="Create New Character"
      />
    )
  }

  if (!user_is_logged_in) {
    return (
      <div className="home-page">
        <div className="welcome-message">
          <p>Welcome to D&D Character Creator!</p>
          <p className="welcome-message-2">
            Log in to create and access characters.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="logged-in-home">
        <div className="witch-and-button">
          <img src={witch} alt="witch" className="witch" />
          {newCharacterButton}
          <div className="counter-witch-padding"></div>
        </div>
        <CharactersContainer characters={charactersData} />
      </div>
    );
  }
};
