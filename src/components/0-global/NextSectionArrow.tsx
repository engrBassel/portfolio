import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons/faAnglesDown";

function NextSectionArrow({ nextSection }: { nextSection: string }) {
  return (
    <div className="next-section-arrow">
      <a
        title={`Scroll to ${nextSection} section`}
        aria-label={`Scroll to ${nextSection} section`}
        href={`#${nextSection}`}
      >
        <FontAwesomeIcon icon={faAnglesDown} size="2x" />
      </a>
    </div>
  );
}

export default NextSectionArrow;
