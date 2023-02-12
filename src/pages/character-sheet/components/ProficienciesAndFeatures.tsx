import { DescriptionToggle } from "./DescriptionToggle";
import { descriptions } from "../../../assets/descriptions";
import { IDescriptions } from "../../../assets/descriptions";

interface IProps {
  proficiencies: string[];
  languages: string[];
  features: string[];
}

export const ProficienciesAndFeatures = (props: IProps) => {
  let commaProficiencies = props.proficiencies.join(", ");
  let commaLanguages = props.languages.join(", ");

  let featuresDisplay = props.features.map((feature) => (
    <DescriptionToggle
      key={`${feature}`}
      title={feature}
      description={descriptions[feature as keyof IDescriptions]}
    />
  ));

  return (
    <div className="character-sheet-item">
      <div className="character-sheet-box-title">Proficiencies & Features</div>
      <div className="proficiencies-box">
        <div className="proficiencies-top-box">
          <DescriptionToggle
            title="Proficiencies"
            description={commaProficiencies}
          />
          <DescriptionToggle title="Languages" description={commaLanguages} />
        </div>
        <div className="proficiencies-bottom-box">{featuresDisplay}</div>
      </div>
    </div>
  );
};
