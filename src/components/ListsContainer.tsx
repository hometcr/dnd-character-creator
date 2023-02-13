import { ListOfChoices } from "./ListOfChoices";

interface IProps {
  page: String;
  // states from choices page
  setRecentlySelectedItem: Function;
  selectedSkillProficiencies?: String[];
  setSelectedSkillProficiencies?: Function;
  selectedItemProficiencies?: String[];
  setSelectedItemProficiencies?: Function;
  selectedEquipment?: String[];
  setSelectedEquipment?: Function;
  selectedLanguages?: String[];
  setSelectedLanguages?: Function;
  selectedArmorAndWeapons?: String[];
  setSelectedArmorAndWeapons?: Function;

  //lists from choices page
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

  // states from spells page
  selectedCantrips?: String[];
  selectedFirstLevelSpells?: String[];
  selectedPreparedSpells?: String[];
  setSelectedCantrips?: Function;
  setSelectedFirstLevelSpells?: Function;
  setSelectedPreparedSpells?: Function;

  // lists from spells page
  knownCantrips?: String[];
  unknownCantrips?: String[][];
  knownFirstLevelSpells?: String[];
  unknownFirstLevelSpells?: String[][];
  knownPreparedSpells?: String[];
  unknownPreparedSpells?: String[][];
}

export const ListsContainer = (props: IProps) => {
  // set up skill proficiencies list if one is sent in via props
  let skillProficienciesList;
  if (
    props.knownSkillProficiencies &&
    props.unknownSkillProficiencies &&
    props.selectedSkillProficiencies &&
    props.setSelectedSkillProficiencies
  ) {
    skillProficienciesList = (
      <ListOfChoices
        listName="Skill Proficiencies"
        knownItems={props.knownSkillProficiencies}
        unknownItems={props.unknownSkillProficiencies}
        setRecentlySelectedItem={props.setRecentlySelectedItem}
        selectedItems={props.selectedSkillProficiencies}
        setSelectedItems={props.setSelectedSkillProficiencies}
      />
    );
  }

  // set up item proficiencies list if one is sent in via props
  let itemProficienciesList;
  if (
    props.knownItemProficiencies &&
    props.unknownItemProficiencies &&
    props.selectedItemProficiencies &&
    props.setSelectedItemProficiencies
  ) {
    itemProficienciesList = (
      <ListOfChoices
        listName="Item Proficiencies"
        knownItems={props.knownItemProficiencies}
        unknownItems={props.unknownItemProficiencies}
        setRecentlySelectedItem={props.setRecentlySelectedItem}
        selectedItems={props.selectedItemProficiencies}
        setSelectedItems={props.setSelectedItemProficiencies}
      />
    );
  }

  // set up equipment list if one is sent in via props
  let equipmentList;
  if (
    props.knownEquipment &&
    props.unknownEquipment &&
    props.selectedEquipment &&
    props.setSelectedEquipment
  ) {
    equipmentList = (
      <ListOfChoices
        listName="Equipment"
        knownItems={props.knownEquipment}
        unknownItems={props.unknownEquipment}
        setRecentlySelectedItem={props.setRecentlySelectedItem}
        selectedItems={props.selectedEquipment}
        setSelectedItems={props.setSelectedEquipment}
      />
    );
  }

  // set up armor & weapons list if one is sent in via props
  let armorAndWeaponsList;
  if (
    props.knownArmorAndWeapons &&
    props.unknownArmorAndWeapons &&
    props.selectedArmorAndWeapons &&
    props.setSelectedArmorAndWeapons
  ) {
    armorAndWeaponsList = (
      <ListOfChoices
        listName="Armor & Weapons"
        knownItems={props.knownArmorAndWeapons}
        unknownItems={props.unknownArmorAndWeapons}
        setRecentlySelectedItem={props.setRecentlySelectedItem}
        selectedItems={props.selectedArmorAndWeapons}
        setSelectedItems={props.setSelectedArmorAndWeapons}
      />
    );
  }

  // set up languages list if one is sent in via props
  let languagesList;
  if (
    props.knownLanguages &&
    props.unknownLanguages &&
    props.selectedLanguages &&
    props.setSelectedLanguages
  ) {
    languagesList = (
      <ListOfChoices
        listName="Languages"
        knownItems={props.knownLanguages}
        unknownItems={props.unknownLanguages}
        setRecentlySelectedItem={props.setRecentlySelectedItem}
        selectedItems={props.selectedLanguages}
        setSelectedItems={props.setSelectedLanguages}
      />
    );
  }

  // set up cantrips list if one is sent in via props
  let cantripsList;
  if (
    props.knownCantrips &&
    props.unknownCantrips &&
    props.selectedCantrips &&
    props.setSelectedCantrips
  ) {
    cantripsList = (
      <ListOfChoices
        listName="Cantrips"
        knownItems={props.knownCantrips}
        unknownItems={props.unknownCantrips}
        setRecentlySelectedItem={props.setRecentlySelectedItem}
        selectedItems={props.selectedCantrips}
        setSelectedItems={props.setSelectedCantrips}
      />
    );
  }

  // set up first level spells list if one is sent in via props
  let firstLevelSpellsList;
  if (
    props.knownFirstLevelSpells &&
    props.unknownFirstLevelSpells &&
    props.selectedFirstLevelSpells &&
    props.setSelectedFirstLevelSpells
  ) {
    firstLevelSpellsList = (
      <ListOfChoices
        listName="1st Level Spells"
        knownItems={props.knownFirstLevelSpells}
        unknownItems={props.unknownFirstLevelSpells}
        setRecentlySelectedItem={props.setRecentlySelectedItem}
        selectedItems={props.selectedFirstLevelSpells}
        setSelectedItems={props.setSelectedFirstLevelSpells}
      />
    );
  }

  // set up prepared spells list if one is sent in via props
  let preparedSpellsList;
  if (
    props.knownPreparedSpells &&
    props.unknownPreparedSpells &&
    props.selectedPreparedSpells &&
    props.setSelectedPreparedSpells
  ) {
    preparedSpellsList = (
      <ListOfChoices
        listName="Prepared Spells"
        knownItems={props.knownPreparedSpells}
        unknownItems={props.unknownPreparedSpells}
        setRecentlySelectedItem={props.setRecentlySelectedItem}
        selectedItems={props.selectedPreparedSpells}
        setSelectedItems={props.setSelectedPreparedSpells}
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
