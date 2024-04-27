import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

function SkillsBox({
  h,
  skills,
}: {
  h: string;
  skills: { name: string; level: string }[];
}) {
  return (
    <div className="main-box skills__content__box">
      <h5>{h}</h5>
      <div className="skills__content__box__items">
        {skills?.map((skill) => (
          <div className="skill" key={skill.name}>
            <FontAwesomeIcon icon={faStar} />
            <div className="skill__text">
              <h6>{skill.name}</h6>
              <p>{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsBox;
