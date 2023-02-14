import { NavigateButton } from "../../components/NavigateButton";
import { CharactersContainer } from "./components/CharactersContainer";
import witch from "../../assets/witch.jpg";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
export interface ICharacter {
  name: string;
  class: string;
  race: string;
  id: string;
}

export interface ICharacterData {
  id: string;
  userId: number;
  name: string;
  race: string;
  class: string;
  background: string;
  level: number;
  proficiencyBonus: number;
  speed: number;
  hitDice: (string | number)[];
  initiative: number;
  passivePerception: number;
  hp: number;
  ac: number;
  savingThrowProficiencies: string[];
  skillProficiencies: string[];
  strengthScore: number;
  charismaScore: number;
  intelligenceScore: number;
  wisdomScore: number;
  dexterityScore: number;
  constitutionScore: number;
  athleticsSkill: number;
  acrobaticsSkill: number;
  sleightOfHandSkill: number;
  stealthSkill: number;
  deceptionSkill: number;
  intimidationSkill: number;
  performanceSkill: number;
  persuasionSkill: number;
  animalHandlingSkill: number;
  insightSkill: number;
  medicineSkill: number;
  perceptionSkill: number;
  survivalSkill: number;
  arcanaSkill: number;
  historySkill: number;
  investigationSkill: number;
  natureSkill: number;
  religionSkill: number;
  armor: string[];
  weapons: string[];
  features: string[];
  itemProficiencies: string[];
  languages: string[];
  spellSlots: number;
  spellSaveDc: number;
  spellAttackModifier: number;
  cantrips: string[];
  knownSpells: string[];
  preparedSpells: string[];
  money: number[];
  items: string[];
}

export const Home = () => {
  // hold current user info
  const [user] = useAuthState(auth);
  // hold character info from database
  const [characterData, setCharacterData] = useState<ICharacterData[] | null>(
    null
  );
  // grab reference to characters in database
  const charactersRef = collection(db, "characters");

  const getCharacterData = async () => {
    if (user) {
      // grab reference to user's characters
      const userCharactersRef = query(
        charactersRef,
        where("userId", "==", user.uid)
      );
      // get the data
      const data = await getDocs(userCharactersRef);
      // format the data
      const newCharacterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as ICharacterData[];
      // fill the state with the data and each document's id
      setCharacterData(newCharacterData);
    }
  };

  // get user-specific character data whenever user is updated
  useEffect(() => {
    getCharacterData();
  }, [user]);

  // fill characters with useful info from database (as stored in state)
  const characters: ICharacter[] = [];
  if (characterData) {
    for (let characterItem of characterData) {
      characters.push({
        name: characterItem.name,
        class: characterItem.class,
        race: characterItem.race,
        id: characterItem.id,
      });
    }
  }

  let newCharacterButton = <></>;
  if (characters.length > 2) {
    newCharacterButton = (
      <div>
        To create a new character, please make space by deleting an old one
      </div>
    );
  } else {
    newCharacterButton = (
      <NavigateButton
        className="new-character-button"
        destination="/begin"
        text="Create New Character"
      />
    );
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
        <CharactersContainer characters={characters} />
      </div>
    );
  }
};
