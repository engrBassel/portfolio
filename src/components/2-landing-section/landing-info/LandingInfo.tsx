import LandingInfoText from "./LandingInfoText";
import LandingInfoButtons from "./LandingInfoButtons";
import LandingInfoLinks from "./LandingInfoLinks";

function LandingInfo() {
  return (
    <div className="landing__info">
      <LandingInfoText />
      <LandingInfoButtons />
      <LandingInfoLinks />
    </div>
  );
}

export default LandingInfo;
