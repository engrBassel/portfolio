import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

function MoreProjectsBtn() {
  return (
    <div className="more-projects">
      <a
        href="https://github.com/engrBassel?tab=repositories"
        target="_blank"
        className="btn"
      >
        <span>More on</span>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}
export default MoreProjectsBtn;
