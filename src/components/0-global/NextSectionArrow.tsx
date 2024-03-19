import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons/faAnglesDown";

function NextSectionArrow({ nextSection }: { nextSection: string }) {
  return (
    <div className="next-section-arrow">
      <a href={`#${nextSection}`}>
        <FontAwesomeIcon icon={faAnglesDown} size="2x" />
      </a>
    </div>
  );
}

export default NextSectionArrow;
