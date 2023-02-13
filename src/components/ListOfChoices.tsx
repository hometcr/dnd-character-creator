import { useState } from "react";

interface IProps {
  listName: String;
  knownItems: String[];
  unknownItems: String[][];
  recentlySelectedItem: String;
  setRecentlySelectedItem: Function;
  setSelectedSkillProficiencies?: Function;
  setSelectedEquipment?: Function;
  setSelectedItemProficiencies?: Function;
  setSelectedLanguages?: Function;
  setSelectedArmorAndWeapons?: Function;
}

export const ListOfChoices = (props: IProps) => {
  // get initital state for selected items
  let initialSelectedItems = [];
  for (let item of props.unknownItems) {
    initialSelectedItems.push(item[0]);
  }

  const [selectedItems, setSelectedItems] = useState(initialSelectedItems);
  console.log(selectedItems);

  // transform known items into listable divs
  let listedKnownItems = props.knownItems.map((knownItem, index) => (
    <div key={`${knownItem}.${index}`} className="item-in-choices-list">
      {knownItem}
    </div>
  ));

  const updateSelectedItem = (
    event: React.SyntheticEvent<EventTarget>,
    index: number
  ) => {
    const selectedInput = (event.target as HTMLInputElement).value;
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = selectedInput;
    setSelectedItems(newSelectedItems);
  };

  let listedUnknownItems;
  if (props.unknownItems[0].length > 0) {
    listedUnknownItems = props.unknownItems.map((unknownItem, indexOut) => (
      <select
        key={`${unknownItem}.${indexOut}.out`}
        className="item-select"
        value={String(selectedItems[indexOut])}
        onChange={(event) => updateSelectedItem(event, indexOut)}
      >
        {unknownItem.map((option, indexIn) => (
          <option key={`${option}.${indexOut}.${indexIn}`}>{option}</option>
        ))}
      </select>
    ));
  } else {
    listedUnknownItems = <div></div>;
  }

  return (
    <div className="list-of-choices-and-title">
      <div className="list-of-choices-name">{props.listName}</div>
      <div className="list-of-choices">
        {listedKnownItems}
        {listedUnknownItems}
      </div>
    </div>
  );
};
