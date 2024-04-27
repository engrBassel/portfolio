import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFreeCodeCamp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import w3schoolsImgSrc from "/src/assets/images/w3schools.png";
import sololearnImgSrc from "/src/assets/images/sololearn.png";

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
      <a
        title="Go to my w3schools profile"
        aria-label="Go to my w3schools profile"
        href="https://www.w3profile.com/engrBassel"
        target="_blank"
      >
        <div>
          <img
            src={w3schoolsImgSrc}
            alt="w3schools logo"
            width="32"
            height="30"
            decoding="async"
          />
        </div>
      </a>
      <a
        title="Go to my sololearn profile"
        aria-label="Go to my sololearn profile"
        href="https://www.sololearn.com/en/profile/28460149"
        target="_blank"
      >
        <div>
          <img
            src={sololearnImgSrc}
            alt="sololearn logo"
            width="31"
            height="31"
            decoding="async"
          />
        </div>
      </a>
    </div>
  );
}

export default LandingInfoLinks;
