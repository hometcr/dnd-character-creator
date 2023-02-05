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

  return (
    <div className="lists-container">
      {proficienciesList}
      {equipmentList}
      {weaponsList}
      {languagesList}
    </div>
  );
};
