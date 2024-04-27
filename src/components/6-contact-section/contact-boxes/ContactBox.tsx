import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactBox({
  icon,
  url,
  text,
}: {
  icon: IconDefinition;
  url: string;
  text: string;
}) {
  return (
    <div className="contact__box">
      <FontAwesomeIcon icon={icon} />
      <a
        title={`Go to ${url}`}
        aria-label={`Go to ${url}`}
        href={url}
        target="_blank"
      >
        {text}
      </a>
    </div>
  );
}

export default ContactBox;
