import data from "../../../assets/data/data.json";
import Project from "./project/Project";
import imgSrcs from "./projectsImgs";

function Projects() {
  return (
    <div className="projects">
      {data?.projects?.map(
        (
          project: {
            title: string;
            alt: string;
            techs: { name: string; color: string }[];
            repo: string;
          },
          indx: number
        ) => (
          <Project
            key={project.repo}
            title={project.title}
            imgSrc={imgSrcs[indx]}
            alt={project.alt}
            techs={project.techs}
            repo={project.repo}
          />
        )
      )}
    </div>
  );
}

export default Projects;
