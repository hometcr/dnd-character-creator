import { DescriptionToggle } from "./DescriptionToggle";
import { descriptions, IDescriptions } from "../../../assets/descriptions";

interface IProps {
  spellSlots: number;
  spellSaveDc: number;
  spellAttackMod: number;
  cantrips: string[];
  firstLevelSpells: string[];
}

export const Spells = (props: IProps) => {
  let cantripsDisplay = props.cantrips.map((cantrip) => (
    <DescriptionToggle
      key={`${cantrip}`}
      title={cantrip}
      description={descriptions[cantrip as keyof IDescriptions]}
    />
  ));

  let firstLevelSpellsDisplay = props.firstLevelSpells.map((spell) => (
    <DescriptionToggle
      key={`${spell}`}
      title={spell}
      description={descriptions[spell as keyof IDescriptions]}
    />
  ));

  return (
    <div className="character-sheet-item">
      <div className="character-sheet-box-title">Spells</div>
      <div className="spells-box">
        <div className="spells-small-boxes-container">
          <div className="spells-small-box">
            <div className="spells-small-box-title">Spell Slots</div>
            <div className="spells-small-box-stat"> : {props.spellSlots}</div>
          </div>
          <div className="spells-small-box">
            <div className="spells-small-box-title">Spell Save DC</div>
            <div className="spells-small-box-stat"> : {props.spellSaveDc}</div>
          </div>
          <div className="spells-small-box">
            <div className="spells-attack-mod-title">Spell Attack Modifier</div>
            <div className="spells-small-box-stat">
              {" "}
              : {props.spellAttackMod}
            </div>
          </div>
        </div>
        <div className="spells-large-boxes-container">
          <div className="spells-cantrips-box">
            <div className="spells-large-box-title">Cantrips</div>
            {cantripsDisplay}
          </div>
          <div className="spells-large-box">
            <div className="spells-large-box-title">1st Level Spells</div>
            {firstLevelSpellsDisplay}
          </div>
        </div>
      </div>
    </div>
  );
};
