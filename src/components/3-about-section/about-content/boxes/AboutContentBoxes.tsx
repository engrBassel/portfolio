import AboutContentBox from "./AboutContentBox";
import { faBook, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

function AboutContentBoxes() {
  return (
    <div className="about-content__boxes">
      <AboutContentBox
        i={faBook}
        h="Education"
        p="Bachelor of Computers Engineering and Automatic Control, Tanta
        university, Jul 2021."
      />
      <AboutContentBox
        i={faUserGraduate}
        h="Graduation Project"
        p="OnXams - Online exams platform graduation project, Excellent grade
        (98%)."
      />
    </div>
  );
}

export default AboutContentBoxes;
