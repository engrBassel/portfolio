import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import ProjectBtns from "./ProjectBtns";

function Project({
  title,
  imgSrc,
  alt,
  techs,
  repo,
}: {
  title: string;
  imgSrc: string;
  alt: string;
  techs: { name: string; color: string }[];
  repo: string;
}) {
  return (
    <div className="project main-box">
      <h5 className="project__title">{title}</h5>
      <div className="project__img">
        <img src={imgSrc} alt={alt} decoding="async" />
      </div>
      <div className="project__techs">
        {techs.map(
          ({ name, color }: { name: string; color: string }, indx: number) => (
            <span className="project__tech" key={indx}>
              <FontAwesomeIcon
                icon={faCircle}
                size="2xs"
                style={{ color: color }}
              />
              <span>{name}</span>
            </span>
          )
        )}
      </div>
      <ProjectBtns repo={repo} />
    </div>
  );
}

export default Project;
