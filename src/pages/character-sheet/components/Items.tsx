import { IDescriptions, descriptions } from "../../../assets/descriptions";
import { DescriptionToggle } from "./DescriptionToggle";

interface IMoney {
  gp?: number;
  sp?: number;
  cp?: number;
  pp?: number;
}

interface IProps {
  items: string[];
  money: IMoney;
}

export const Items = (props: IProps) => {
  let moneyList = [];
  for (let coinType in props.money) {
    if (props.money[coinType as keyof IMoney] != 0) {
      moneyList.push(`${props.money[coinType as keyof IMoney]} ${coinType}`);
    }
  }
  let moneyDisplay = moneyList.join(", ");

  let itemsDisplay = props.items.map((item) => (
    <DescriptionToggle
      title={item}
      description={descriptions[item as keyof IDescriptions]}
    />
  ));

  return (
    <div className="character-sheet-item">
      <div className="character-sheet-box-title">Items</div>
      <div className="items-box">
        <div className="money-box">
          <div className="money-title">Money: </div>
          <div>{moneyDisplay}</div>
        </div>
        <div className="items-items-box">{itemsDisplay}</div>
      </div>
    </div>
  );
};
