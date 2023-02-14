import self from "../assets/self.jpg";
import githubLogo from "../assets/github-logo.jpg";
import linkedInLogo from "../assets/linked-in-logo.jpg"
import { useNavigate } from "react-router-dom";

export const About = () => {

const navigate = useNavigate()

  return (
    <div className="about-page">
      <div className="self-photo-container">
        <img className="self-photo" src={self} alt="Caitlyn, the website creator"/>
      </div>
      <div className="about-text-container">
        <p className="about-title">I hope you enjoy my capstone project!</p>
        <p className="about-paragraph">
          Two years ago (when I knew nothing about coding), I was invited 
          to join a zoom Dungeons and Dragons campaign. I enjoyed the 
          game, but my favorite part was creating spreadsheets to keep 
          track of the character information. Making the perfect excel 
          character sheet became my pandemic hobby.</p>
        <p className="about-paragraph">
          Somewhere along the way, I realized that the formulas I was 
          having so much fun creating looked something like code. I 
          decided to try a free online coding class — and I was instantly 
          hooked. I needed to find a way to make coding my career. That 
          realization brought me to Ada Developer’s Academy, where I am 
          currently finishing up the classroom portion of my software 
          development training.
        </p>
        <p className="about-paragraph">
          Two years ago, my first ever attempt at coding was a D&D 
          character creator in Python. I couldn’t think of a better way to 
          represent my journey as a developer than to try again, this time 
          with a few more tools in my toolbox. To me, this capstone project 
          is both a culmination of my learning at Ada and a reminder to 
          myself of how far I’ve come.
        </p>
        <div className="about-signature">
          <p>— Caitlyn Homet, Junior Software Developer</p>
          <a href="https://www.linkedin.com/in/caitlyn-homet/"><img className="signature-logo" src={linkedInLogo} alt="linked in logo"/></a>
          <a href="https://github.com/hometcr/dnd-character-creator"> <img className="signature-logo" src={githubLogo} alt="github logo"/> </a>
        </div>
      </div>
    </div>
  );

}