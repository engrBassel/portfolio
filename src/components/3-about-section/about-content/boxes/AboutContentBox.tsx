import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutContentBox({
  i,
  h,
  p,
}: {
  i: IconDefinition;
  h: string;
  p: string;
}) {
  return (
    <div className="main-box">
      <FontAwesomeIcon icon={i} size="2x" />
      <h5 className="box__heading">{h}</h5>
      <p className="box__paragraph">{p}</p>
    </div>
  );
}

export default AboutContentBox;
