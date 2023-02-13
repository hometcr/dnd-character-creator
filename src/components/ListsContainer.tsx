import { ListOfChoices } from "./ListOfChoices";
import { useState } from "react";
interface IProps {
  page: String;
  knownEquipment?: String[];
  unknownEquipment?: String[][];
  knownSkillProficiencies?: String[];
  unknownSkillProficiencies?: String[][];
  knownItemProficiencies?: String[];
  unknownItemProficiencies?: String[][];
  knownLanguages?: String[];
  unknownLanguages?: String[][];
  knownArmorAndWeapons?: String[];
  unknownArmorAndWeapons?: String[][];
  knownCantrips?: String[];
  unknownCantrips?: String[][];
  knownFirstLevelSpells?: String[];
  unknownFirstLevelSpells?: String[][];
  knownPreparedSpells?: String[];
  unknownPreparedSpells?: String[][];
}

export const ListsContainer = (props: IProps) => {
  // keep track of whatever was most recently selected
  // so we can pop up its description
  const [recentlySelectedItem, setRecentlySelectedItem] = useState("");

  const [selectedSkillProficiencies, setSelectedSkillProficiencies] = useState(
    []
  );
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedItemProficiencies, setSelectedItemProficiencies] = useState(
    []
  );
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedArmorAndWeapons, setSelectedArmorAndWeapons] = useState([]);

  // set up skill proficiencies list if one is sent in via props
  let skillProficienciesList;
  if (props.knownSkillProficiencies && props.unknownSkillProficiencies) {
    skillProficienciesList = (
      <ListOfChoices
        listName="Skill Proficiencies"
        knownItems={props.knownSkillProficiencies}
        unknownItems={props.unknownSkillProficiencies}
        recentlySelectedItem={recentlySelectedItem}
        setRecentlySelectedItem={setRecentlySelectedItem}
        setSelectedSkillProficiencies={setSelectedSkillProficiencies}
      />
    );
  }

  // set up item proficiencies list if one is sent in via props
  let itemProficienciesList;
  if (props.knownItemProficiencies && props.unknownItemProficiencies) {
    itemProficienciesList = (
      <ListOfChoices
        listName="Item Proficiencies"
        knownItems={props.knownItemProficiencies}
        unknownItems={props.unknownItemProficiencies}
        recentlySelectedItem={recentlySelectedItem}
        setRecentlySelectedItem={setRecentlySelectedItem}
        setSelectedItemProficiencies={setSelectedItemProficiencies}
      />
    );
  }

  // set up equipment list if one is sent in via props
  let equipmentList;
  if (props.knownEquipment && props.unknownEquipment) {
    equipmentList = (
      <ListOfChoices
        listName="Equipment"
        knownItems={props.knownEquipment}
        unknownItems={props.unknownEquipment}
        recentlySelectedItem={recentlySelectedItem}
        setRecentlySelectedItem={setRecentlySelectedItem}
        setSelectedEquipment={setSelectedEquipment}
      />
    );
  }

  // set up armor & weapons list if one is sent in via props
  let armorAndWeaponsList;
  if (props.knownArmorAndWeapons && props.unknownArmorAndWeapons) {
    armorAndWeaponsList = (
      <ListOfChoices
        listName="Armor & Weapons"
        knownItems={props.knownArmorAndWeapons}
        unknownItems={props.unknownArmorAndWeapons}
        recentlySelectedItem={recentlySelectedItem}
        setRecentlySelectedItem={setRecentlySelectedItem}
        setSelectedArmorAndWeapons={setSelectedArmorAndWeapons}
      />
    );
  }

  // set up languages list if one is sent in via props
  let languagesList;
  if (props.knownLanguages && props.unknownLanguages) {
    languagesList = (
      <ListOfChoices
        listName="Languages"
        knownItems={props.knownLanguages}
        unknownItems={props.unknownLanguages}
        recentlySelectedItem={recentlySelectedItem}
        setRecentlySelectedItem={setRecentlySelectedItem}
        setSelectedLanguages={setSelectedLanguages}
      />
    );
  }

  // set up cantrips list if one is sent in via props
  let cantripsList;
  if (props.knownCantrips && props.unknownCantrips) {
    cantripsList = (
      <ListOfChoices
        listName="Cantrips"
        knownItems={props.knownCantrips}
        unknownItems={props.unknownCantrips}
        recentlySelectedItem={recentlySelectedItem}
        setRecentlySelectedItem={setRecentlySelectedItem}
      />
    );
  }

  // set up first level spells list if one is sent in via props
  let firstLevelSpellsList;
  if (props.knownFirstLevelSpells && props.unknownFirstLevelSpells) {
    firstLevelSpellsList = (
      <ListOfChoices
        listName="1st Level Spells"
        knownItems={props.knownFirstLevelSpells}
        unknownItems={props.unknownFirstLevelSpells}
        recentlySelectedItem={recentlySelectedItem}
        setRecentlySelectedItem={setRecentlySelectedItem}
      />
    );
  }

  // set up prepared spells list if one is sent in via props
  let preparedSpellsList;
  if (props.knownPreparedSpells && props.unknownPreparedSpells) {
    preparedSpellsList = (
      <ListOfChoices
        listName="Prepared Spells"
        knownItems={props.knownPreparedSpells}
        unknownItems={props.unknownPreparedSpells}
        recentlySelectedItem={recentlySelectedItem}
        setRecentlySelectedItem={setRecentlySelectedItem}
      />
    );
  }

  return (
    <div className="lists-container">
      {skillProficienciesList}
      {itemProficienciesList}
      {equipmentList}
      {armorAndWeaponsList}
      {languagesList}
      {cantripsList}
      {firstLevelSpellsList}
      {preparedSpellsList}
    </div>
  );
};
