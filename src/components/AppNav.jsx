import { NavLink } from "react-router-dom";
import { nav } from "./AppNav.module.css";
function AppNav() {
  return (
    <nav className={nav}>
      <ul>
        <li>
          <NavLink to="cities">Citites</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
