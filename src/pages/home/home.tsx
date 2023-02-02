import { NavigateButton } from "../../components/NavigateButton"
import { CharactersContainer } from "./components/CharactersContainer"
import witch from "../../assets/witch.jpg"

export const Home = () => {
  const user_is_logged_in = true;

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
          <img src={witch} alt="witch" className="witch"/>
          <NavigateButton className="new-character-button" destination="/create" text="Create New Character"/>
          <div className="counter-witch-padding"></div>
        </div>
        <CharactersContainer/>
      </div>
    );
  }
};
