export const BeginCharacterForm = () => {
  return (
    <form className="begin-character-form">
      <div className="begin-form-only">
        <div>
          <label className="begin-form-label">Name: </label>
          <input type="string" className="input-name"></input>
        </div>
        <div>
          <label className="begin-form-label">Class: </label>
          <select className="begin-select">
            <option selected></option>
            <option>Fighter</option>
            <option>Wizard</option>
            <option>Bard</option>
            <option>Paladin</option>
          </select>
        </div>
        <div>
          <label className="begin-form-label">Race: </label>
          <select className="begin-select">
            <option selected></option>
            <option>Human</option>
            <option>Dwarf</option>
            <option>Elf</option>
            <option>Halfling</option>
          </select>
        </div>
        <div>
          <label className="begin-form-label">Background: </label>
          <select className="begin-select">
            <option selected></option>
            <option>Entertainer</option>
            <option>Folk Hero</option>
            <option>Acolyte</option>
            <option>Noble</option>
          </select>
        </div>
      </div>
      <button className="begin-next-button" type="submit">
        Next
      </button>
    </form>
  );
};
