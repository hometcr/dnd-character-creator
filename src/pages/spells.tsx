import { ListsContainer } from "../components/ListsContainer";
import { ItemDescription } from "../components/ItemDescription";
import book from "../assets/book.jpg";
import { NavigateButton } from "../components/NavigateButton";

export const Spells = () => {
  let selectedItem = "";

  let knownCantrips: String[] = [];
  let unknownCantrips: String[][] = [[]];
  let knownFirstLevelSpells: String[] = [];
  let unknownFirstLevelSpells: String[][] = [[]];
  let knownPreparedSpells: String[] = [];
  let unknownPreparedSpells: String[][] = [[]];

  return (
    <div className="spells-page">
      <div className="spells-without-description">
        <div className="spells-without-description-without-button">
          <div className="spells-book-and-title">
            <div className="counter-book"></div>
            <h2 className="spells-title">Step 4: Spells</h2>
            <img className="book-image" src={book} alt="magic spell book" />
          </div>
          <div className="spells-description">
            If you are a spellcaster, decide which spells to learn from the options provided. If needed,
            decide which of those spells to have prepared for your first
            session.
          </div>
          <ListsContainer
            page="spells"
            knownCantrips={knownCantrips}
            unknownCantrips={unknownCantrips}
            knownFirstLevelSpells={knownFirstLevelSpells}
            unknownFirstLevelSpells={unknownFirstLevelSpells}
            knownPreparedSpells={knownPreparedSpells}
            unknownPreparedSpells={unknownPreparedSpells}
          />
        </div>
        <NavigateButton
          destination="/character-sheet"
          text="Create Character"
          className="create-character-button"
        />
      </div>
      <div className="spells-description-container">
        <ItemDescription item={selectedItem} />
      </div>
    </div>
  );
};
