import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li className="test">
          <img src="HKLogo.svg" id="navLogo" />
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/Resume">Resume</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

// export default Navbar;
