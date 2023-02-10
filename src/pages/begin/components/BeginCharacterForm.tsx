import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fillSlice } from "../../../features/character";

export const BeginCharacterForm = () => {
  const dispatch = useDispatch();

  const [charName, setCharName] = useState("");
  const [charRace, setCharRace] = useState("");
  const [charClass, setCharClass] = useState("");
  const [charBackground, setCharBackground] = useState("");

  const updateName = (e: React.SyntheticEvent<EventTarget>) => {
    const nameInput = (e.target as HTMLInputElement).value;
    setCharName(nameInput);
  };

  const updateRace = (e: React.SyntheticEvent<EventTarget>) => {
    const raceInput = (e.target as HTMLInputElement).value;
    setCharRace(raceInput);
  };

  const updateClass = (e: React.SyntheticEvent<EventTarget>) => {
    const classInput = (e.target as HTMLInputElement).value;
    setCharClass(classInput);
  };

  const updateBackground = (e: React.SyntheticEvent<EventTarget>) => {
    const charInput = (e.target as HTMLInputElement).value;
    setCharBackground(charInput);
  };

  const fillBeginSlice = () => {
    let beginInfo = {
      name: charName,
      race: charRace,
      class: charClass,
      background: charBackground,
    };
    dispatch(fillSlice(beginInfo));
  };

  const onFormSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    fillBeginSlice();
  };

  return (
    <form className="begin-character-form" onSubmit={onFormSubmit}>
      <div className="begin-form-only">
        <div>
          <label className="begin-form-label">Name: </label>
          <input
            type="string"
            className="input-name"
            value={charName}
            onChange={updateName}
          ></input>
        </div>
        <div>
          <label className="begin-form-label">Class: </label>
          <select
            value={charClass}
            onChange={updateClass}
            className="begin-select"
          >
            <option selected></option>
            <option>Fighter</option>
            <option>Wizard</option>
            <option>Bard</option>
            <option>Paladin</option>
          </select>
        </div>
        <div>
          <label className="begin-form-label">Race: </label>
          <select
            value={charRace}
            onChange={updateRace}
            className="begin-select"
          >
            <option selected></option>
            <option>Human</option>
            <option>Dwarf</option>
            <option>Elf</option>
            <option>Halfling</option>
          </select>
        </div>
        <div>
          <label className="begin-form-label">Background: </label>
          <select
            value={charBackground}
            onChange={updateBackground}
            className="begin-select"
          >
            <option selected></option>
            <option>Entertainer</option>
            <option>Folk Hero</option>
            <option>Acolyte</option>
            <option>Noble</option>
          </select>
        </div>
      </div>
      <button className="begin-next-button" type="submit">
        Next
      </button>
    </form>
  );
};
