import SkillsBox from "./SkillsBox";
import data from "../../../assets/data/data.json";

function SkillsContent() {
  return (
    <div className="skills__content">
      <SkillsBox h="Technologies" skills={data?.skills?.techs} />
      <SkillsBox h="Concepts" skills={data?.skills?.concepts} />
    </div>
  );
}

export default SkillsContent;
