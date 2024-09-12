import AboutContentBox from "./AboutContentBox";
import { faBook, faCode } from "@fortawesome/free-solid-svg-icons";

function AboutContentBoxes() {
  return (
    <div className="about-content__boxes">
      <AboutContentBox
        i={faBook}
        h="Education"
        p="BSc in Computers Engineering, Tanta university - Jul 2021."
      />
      <AboutContentBox
        i={faCode}
        h="Training"
        p="Front-End Web Development BootCamp, Sprints - Sep. 2024."
      />
    </div>
  );
}

export default AboutContentBoxes;
