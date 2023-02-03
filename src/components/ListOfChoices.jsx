export const ListOfChoices = () => {
  //change to props
  let listName = "Proficiencies";
  let knownItems = ["Shovel", "Iron Pot", "Common Clothes"];
  let unknownItems = [
    ["Explorer's Pack", "Dungeoneer's Pack"],
    [
      "Calligrapher's Supplies",
      "Carpenter's Tools",
      "Cook's Utensils",
      "Mason's Tools",
      "Tinker's Tools",
    ],
  ];

  // transform known items into listable divs
  let listedKnownItems = knownItems.map((knownItem) => (
    <div className="item-in-choices-list">{knownItem}</div>
  ));

  // transform unknown items into listable dropdowns
  let listedUnknownItems = unknownItems.map((unknownItem) => (
    <select className="item-select">
      {unknownItem.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  ));

  return (
    <div className="list-of-choices-and-title">
      <div className="list-of-choices-name">{listName}</div>
      <div className="list-of-choices">
        {listedKnownItems}
        {listedUnknownItems}
      </div>
    </div>
  );
};
