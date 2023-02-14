import { fillSlice } from "../../../features/spells";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { db } from "../../../config/firebase";
import { collection, addDoc } from "firebase/firestore";

interface IProps {
  knownCantrips: String[];
  selectedCantrips: String[];
  knownFirstLevelSpells: String[];
  selectedFirstLevelSpells: String[];
  knownPreparedSpells: String[];
  selectedPreparedSpells: String[];
}

export const CreateCharacterButton = (props: IProps) => {
  const dispatch = useDispatch();
  const charactersCollectionRef = collection(db, "characters");

  const fillSpellsSlice = () => {
    // combine pre-known and chosen items
    let allCantrips = [...props.knownCantrips, ...props.selectedCantrips];
    let allFirstLevelSpells = [
      ...props.knownFirstLevelSpells,
      ...props.selectedFirstLevelSpells,
    ];
    let allPreparedSpells = [
      ...props.knownPreparedSpells,
      ...props.selectedPreparedSpells,
    ];

    // create sets of each list to help find duplicates
    let uniqueCantrips = new Set(allCantrips);
    let uniqueFirstLevelSpells = new Set(allFirstLevelSpells);
    let uniquePreparedSpells = new Set(allPreparedSpells);

    // if any duplicates are found, alert the user
    if (allCantrips.length != uniqueCantrips.size) {
      alert("Please choose unique cantrips");
    } else if (allFirstLevelSpells.length != uniqueFirstLevelSpells.size) {
      alert("Please choose unique first level spells");
    } else if (allPreparedSpells.length != uniquePreparedSpells.size) {
      alert("Please choose unique prepared spells");
    } else {
      // if no duplicates are found, fill the slice
      let spellsInfo = {
        cantrips: allCantrips,
        firstLevelSpells: allFirstLevelSpells,
        preparedSpells: allPreparedSpells,
      };
      console.log("filling slice");
      dispatch(fillSlice(spellsInfo));
      // navigate("/spells");
    }
  };

  const createNewCharacter = async () => {
    const newCharacter = {
      test: "This is a test",
      number: 3,
    };
    // give addDoc an object defining what add to the database
    // make sure each field has the correct type!
    await addDoc(charactersCollectionRef, newCharacter);
  };

  const onPageSubmit = () => {
    fillSpellsSlice();
    createNewCharacter();
  };
  return (
    <button className="create-character-button" onClick={onPageSubmit}>
      Next
    </button>
  );
};
