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

  let listedKnownItems = knownItems.map((knownItem) => (
    <div className="item-in-choices-list">{knownItem}</div>
  ));

  

  // let listedUnknownItems = unknownItems.map((unknownItem) => (
  //   <select className="item-select">
  //     {unknownItem.map((choice) => (
  //       <option>{choice}</option>
  //     ))}
  //   </select>
  // ));

  return (
    <div className="list-of-choices-and-title">
      <div className="list-of-choices-name">{listName}</div>
      <div className="list-of-choices">
        {listedKnownItems}
        <select className="item-select">
          <option>Explorer's Pack</option>
          <option>Dungeoneer's Pack</option>
        </select>
        <select className="item-select">
          <option>Calligrapher's Supplies</option>
          <option>Carpenter's Tools</option>
          <option>Cook's Utensils</option>
          <option>Mason's Tools</option>
          <option>Tinker's Tools</option>
        </select>
      </div>
    </div>
  );
};
