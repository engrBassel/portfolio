import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFreeCodeCamp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function LandingInfoLinks() {
  return (
    <div className="landing__info__links">
      <a
        title="Go to my linkedin profile"
        aria-label="Go to my linkedin profile"
        href="https://www.linkedin.com/in/engrbassel"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        title="Go to my github profile"
        aria-label="Go to my github profile"
        href="https://www.github.com/engrBassel"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        title="Go to my freecodecamp profile"
        aria-label="Go to my freecodecamp profile"
        href="https://www.freecodecamp.org/engrBassel"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFreeCodeCamp} size="2x" />
      </a>
    </div>
  );
}

export default LandingInfoLinks;
