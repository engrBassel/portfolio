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
            links: { repo: string; deploy: string };
          },
          indx: number
        ) => (
          <Project
            key={project.links.repo}
            title={project.title}
            imgSrc={imgSrcs[indx]}
            alt={project.alt}
            techs={project.techs}
            links={project.links}
          />
        )
      )}
    </div>
  );
}

export default Projects;
