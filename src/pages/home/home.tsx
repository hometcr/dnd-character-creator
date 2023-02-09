import { NavigateButton } from "../../components/NavigateButton";
import { CharactersContainer } from "./components/CharactersContainer";
import witch from "../../assets/witch.jpg";
import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth";


export interface ICharacter {
  name: string;
  class: string;
  race: string;
}

export const Home = () => {

  const [user] = useAuthState(auth);

  // const user_is_logged_in = true;

  const charactersData: ICharacter[] = [
    // {
    //   name: "Beverly Toegold",
    //   class: "paladin",
    //   race: "halfing",
    // },
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
      <div>To create a new character, please make space by deleting an old one</div>
    )
  } else {
    newCharacterButton=(
      <NavigateButton
        className="new-character-button"
        destination="/begin"
        text="Create New Character"
      />
    )
  }

  if (!user) {
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
