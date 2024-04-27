import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";

function GoTopArrow() {
  return (
    <div className="go-top">
      <a
        title="Scroll to the top of the page"
        aria-label="Scroll to the top of the page"
        href="#header"
      >
        <FontAwesomeIcon icon={faHouse} size="2x" />
      </a>
    </div>
  );
}

export default GoTopArrow;
