import data from "../../assets/data/data.json";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav__items">
        {data?.sections?.map((item, indx) => {
          if (indx == data.sections.length - 1) {
            return;
          }
          return (
            <li className="nav__items__item" key={item}>
              <a className="nav__items__item__link" href={`#${item}`}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
