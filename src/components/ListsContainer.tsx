import { ListOfChoices } from "./ListOfChoices";

interface IProps {
  page: String;
  knownEquipment?: String[];
  unknownEquipment?: String[][];
  knownProficiencies?: String[];
  unknownProficiencies?: String[][];
  knownLanguages?: String[];
  unknownLanguages?: String[][];
  knownWeapons?: String[];
  unknownWeapons?: String[][];
  knownCantrips?: String[];
  unknownCantrips?: String[][];
  knownFirstLevelSpells?: String[];
  unknownFirstLevelSpells?: String[][];
  knownPreparedSpells?: String[];
  unknownPreparedSpells?: String[][];
}

export const ListsContainer = (props: IProps) => {
  // set up proficiencies list if one is sent in via props
  let proficienciesList;
  if (props.knownProficiencies && props.unknownProficiencies) {
    proficienciesList = (
      <ListOfChoices
        listName="Proficiencies"
        knownItems={props.knownProficiencies}
        unknownItems={props.unknownProficiencies}
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
      />
    );
  }

  // set up weapons list if one is sent in via props
  let weaponsList;
  if (props.knownWeapons && props.unknownWeapons) {
    weaponsList = (
      <ListOfChoices
        listName="Weapons"
        knownItems={props.knownWeapons}
        unknownItems={props.unknownWeapons}
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
      />
    );
  }

  return (
    <div className="lists-container">
      {proficienciesList}
      {equipmentList}
      {weaponsList}
      {languagesList}
      {cantripsList}
      {firstLevelSpellsList}
      {preparedSpellsList}
    </div>
  );
};
