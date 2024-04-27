import data from "../../assets/data/data.json";
import { useState } from "react";

function Navbar() {
  const [activeNav, setActiveNav] = useState(false);

  function toggleNav() {
    setActiveNav(!activeNav);
  }

  function closeNav() {
    setActiveNav(false);
  }

  return (
    <nav className="navbar">
      <div
        className={`nav__icon${activeNav ? " active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__icon__line"></span>
        <span className="nav__icon__line"></span>
        <span className="nav__icon__line"></span>
      </div>
      <ul className={`nav__items${activeNav ? " active" : ""}`}>
        {data?.sections?.map((section) => (
          <li className="nav__items__item" key={section}>
            <a
              title={`Go to ${section} section`}
              aria-label={`Go to ${section} section`}
              className="nav__items__item__link"
              href={`#${section}`}
              onClick={closeNav}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
