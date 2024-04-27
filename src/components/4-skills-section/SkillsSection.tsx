import MainHeading from "../0-global/MainHeading";
import SkillsContent from "./skills-content/SkillsContent";
import NextSectionArrow from "../0-global/NextSectionArrow";

function SkillsSection() {
  return (
    <section id="skills" className="section-full">
      <MainHeading p="Explore my" h="Skills" />
      <SkillsContent />
      <NextSectionArrow nextSection="projects" />
    </section>
  );
}

export default SkillsSection;
