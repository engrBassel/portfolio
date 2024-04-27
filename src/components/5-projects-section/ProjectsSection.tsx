import MainHeading from "../0-global/MainHeading";
import Projects from "./projects/Projects";
import MoreProjectsBtn from "./MoreProjectsBtn";
import NextSectionArrow from "../0-global/NextSectionArrow";

function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <MainHeading p="Browse my recent" h="Projects" />
      <Projects />
      <MoreProjectsBtn />
      <NextSectionArrow nextSection="contact" />
    </section>
  );
}

export default ProjectsSection;
