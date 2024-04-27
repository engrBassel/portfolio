import MainHeading from "../0-global/MainHeading";
import AboutContent from "./about-content/AboutContent";
import NextSectionArrow from "../0-global/NextSectionArrow";

function AboutSection() {
  return (
    <section id="about" className="section-full">
      <MainHeading p="Get to know more" h="About Me" />
      <AboutContent />
      <NextSectionArrow nextSection="skills" />
    </section>
  );
}

export default AboutSection;
