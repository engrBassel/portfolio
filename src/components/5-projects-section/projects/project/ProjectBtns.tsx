function ProjectBtns({ links }: { links: { repo: string; deploy: string } }) {
  return (
    <div className="project__btns">
      <button
        type="button"
        className="btn--outline"
        onClick={() =>
          window.open(`https://github.com/engrBassel/${links.repo}`, "_blank")
        }
        disabled={links.repo == "" ? true : false}
      >
        Github
      </button>
      <button
        type="button"
        className="btn"
        onClick={() =>
          links.deploy == "github"
            ? window.open(
                `https://engrbassel.github.io/${links.repo}`,
                "_blank"
              )
            : window.open(links.deploy)
        }
        disabled={links.deploy == "" ? true : false}
      >
        Live Demo
      </button>
    </div>
  );
}

export default ProjectBtns;
