import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";

function GoTopArrow() {
  return (
    <div className="go-top">
      <a href="#header">
        <FontAwesomeIcon icon={faHouse} size="2x" />
      </a>
    </div>
  );
}

export default GoTopArrow;
