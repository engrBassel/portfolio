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
        {data?.sections?.map((item, indx) => (
          <li className="nav__items__item" key={indx}>
            <a
              className="nav__items__item__link"
              href={`#${item}`}
              onClick={closeNav}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
