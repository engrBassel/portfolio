function LandingInfoButtons() {
  return (
    <div className="landing__info__buttons">
      <button
        type="button"
        title="Download my resume"
        className="btn--outline"
        onClick={() => window.open("/bassel-mostafa-resume.pdf")}
      >
        My Resume
      </button>
      <a
        title="Go to contact info"
        aria-label="Go to contact info"
        href="#contact"
        className="btn"
      >
        Contact Info
      </a>
    </div>
  );
}

export default LandingInfoButtons;
