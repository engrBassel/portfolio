import {
  LandingSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  Footer,
  ScrollProgress,
} from "../../components";

function Homepage() {
  return (
    <>
      <ScrollProgress />
      <main>
        <LandingSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
