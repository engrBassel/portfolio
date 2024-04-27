import SkillsBox from "./SkillsBox";
import data from "../../../assets/data/data.json";

function SkillsContent() {
  return (
    <div className="skills__content">
      <SkillsBox h="Frontend Development" skills={data?.skills?.front} />
      <SkillsBox h="General Skills" skills={data?.skills?.general} />
    </div>
  );
}

export default SkillsContent;
