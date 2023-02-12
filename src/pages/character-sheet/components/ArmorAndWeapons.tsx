import { IDescriptions, descriptions } from "../../../assets/descriptions";
import { DescriptionToggle } from "./DescriptionToggle";

interface IProps {
  weapons: string[];
  armor: string[];
}

export const ArmorAndWeapons = (props: IProps) => {
  let armorDisplay = props.armor.map((armorPiece) => (
    <DescriptionToggle
      key={`${armorPiece}`}
      title={armorPiece}
      description={descriptions[armorPiece as keyof IDescriptions]}
    />
  ));

  let weaponsDisplay = props.weapons.map((weapon) => (
    <DescriptionToggle
      key={`${weapon}`}
      title={weapon}
      description={descriptions[weapon as keyof IDescriptions]}
    />
  ));

  return (
    <div className="character-sheet-item">
      <div className="character-sheet-box-title">Armor & Weapons</div>
      <div className="armor-and-weapons-box">
        <div className="armor-box">
          <div className="armor-weapons-box-title">Armor</div>
          {armorDisplay}
        </div>
        <div className="weapons-box">
          <div className="armor-weapons-box-title">Weapons</div>
          {weaponsDisplay}
        </div>
      </div>
    </div>
  );
};
