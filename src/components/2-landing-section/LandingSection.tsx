import LandingInfo from "./landing-info/LandingInfo";
import LandingImg from "./LandingImg";
import NextSectionArrow from "../0-global/NextSectionArrow";

function LandingSection() {
  return (
    <section id="landing-section" className="section">
      <LandingImg />
      <LandingInfo />
      <NextSectionArrow nextSection="about" />
    </section>
  );
}

export default LandingSection;
