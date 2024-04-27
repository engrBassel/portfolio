function ProjectBtns({ repo }: { repo: string }) {
  return (
    <div className="project__btns">
      <button
        type="button"
        className="btn--outline"
        onClick={() =>
          window.open(`https://github.com/engrBassel/${repo}`, "_blank")
        }
        disabled={repo == "" ? true : false}
      >
        Github
      </button>
      <button
        type="button"
        className="btn"
        onClick={() =>
          window.open(`https://engrbassel.github.io/${repo}`, "_blank")
        }
        disabled={repo == "" || repo == "portfolio" ? true : false}
      >
        Live Demo
      </button>
    </div>
  );
}

export default ProjectBtns;
