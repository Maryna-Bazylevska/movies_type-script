import { NavLink } from "react-router-dom";
import { Link } from "./Navigation.styled";
//import styles from "./Navigation.module.css";
const Navigation = () => (
  <header>
    <nav>
      <Link
        to="/"
        // className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Home
      </Link>
      <Link
        to="/movies"

        // className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Movies
      </Link>
    </nav>
    <hr />
  </header>
);
export default Navigation;
