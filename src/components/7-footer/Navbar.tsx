import data from "../../assets/data/data.json";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav__items">
        {data?.sections?.map((section) => {
          if (section == data.sections.at(-1)) {
            return;
          }
          return (
            <li className="nav__items__item" key={section}>
              <a
                title={`Scroll to ${section} section`}
                aria-label={`Scroll to ${section} section`}
                className="nav__items__item__link"
                href={`#${section}`}
              >
                {section}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
