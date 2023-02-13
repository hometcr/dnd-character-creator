import { useState } from "react";

interface IProps {
  listName: String;
  knownItems: String[];
  unknownItems: String[][];
  setRecentlySelectedItem: Function;
  selectedItems: String[];
  setSelectedItems: Function;
}

export const ListOfChoices = (props: IProps) => {
  // transform known items into listable divs
  let listedKnownItems = props.knownItems.map((knownItem, index) => (
    <div key={`${knownItem}.${index}`} className="item-in-choices-list">
      {knownItem}
    </div>
  ));

  // transform unknown items into dropdowns
  let listedUnknownItems;
  if (props.unknownItems[0].length > 0) {
    listedUnknownItems = props.unknownItems.map(
      (unknownItem, dropdownIndex) => (
        <select
          key={`${unknownItem}.${dropdownIndex}`}
          className="item-select"
          value={String(props.selectedItems[dropdownIndex])}
          onChange={(event) => updateSelectedItem(event, dropdownIndex)}
        >
          {unknownItem.map((option, optionIndex) => (
            <option key={`${option}.${dropdownIndex}.${optionIndex}`}>
              {option}
            </option>
          ))}
        </select>
      )
    );
  } else {
    listedUnknownItems = <div></div>;
  }

  // when any item is selected, make it the recently selected item (so its description
  // can pop up) and update the selected_(equipment/languages/etc) list
  const updateSelectedItem = (
    event: React.SyntheticEvent<EventTarget>,
    index: number
  ) => {
    const selectedInput = (event.target as HTMLInputElement).value;
    const newSelectedItems = [...props.selectedItems];
    newSelectedItems[index] = selectedInput;
    props.setSelectedItems(newSelectedItems);
    props.setRecentlySelectedItem(selectedInput);
  };

  // if there are no items, display N/A
  if (props.knownItems.length == 0 && props.unknownItems[0].length == 0) {
    listedKnownItems = [<div>N/A</div>];
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
