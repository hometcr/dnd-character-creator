interface IProps {
  listName: String;
  knownItems: String[];
  unknownItems: String[][];
}

export const ListOfChoices = (props: IProps) => {
  // transform known items into listable divs
  let listedKnownItems = props.knownItems.map((knownItem) => (
    <div className="item-in-choices-list">{knownItem}</div>
  ));

  // transform unknown items into listable dropdowns
  let listedUnknownItems = props.unknownItems.map((unknownItem) => (
    <select className="item-select">
      {unknownItem.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  ));

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
