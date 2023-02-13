import { useState } from "react";

interface IProps {
  listName: String;
  knownItems: String[];
  unknownItems: String[][];
  // recentlySelectedItem: String;
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

  const [theseSelectedItems, setTheseSelectedItems] = useState(initialSelectedItems);
  console.log(theseSelectedItems);

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
    const newSelectedItems = [...theseSelectedItems];
    newSelectedItems[index] = selectedInput;
    setTheseSelectedItems(newSelectedItems);
    props.setRecentlySelectedItem(selectedInput)
  };

  let listedUnknownItems;
  if (props.unknownItems[0].length > 0) {
    listedUnknownItems = props.unknownItems.map((unknownItem, indexOut) => (
      <select
        key={`${unknownItem}.${indexOut}.out`}
        className="item-select"
        value={String(theseSelectedItems[indexOut])}
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
