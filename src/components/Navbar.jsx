import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbarContainer">
      <div className="logoContainer">
        <Link to="/">
          <img src="HKLogo.svg" className="navLogo" />
        </Link>
      </div>
      <ul className="navbarTabs">
        <li className="navItem">
          <Link to="/" className="navItemStyling">
            About
          </Link>
        </li>
        <li className="navItem">
          <Link to="/Portfolio" className="navItemStyling">
            Portfolio
          </Link>
        </li>
        <li className="navItem">
          <Link to="/Resume" className="navItemStyling">
            Resume
          </Link>
        </li>
        <li className="navItem">
          <Link to="/Contact" className="navItemStyling">
            Contact
          </Link>
        </li>
      </ul>
      {/* <button class="mobileHamburger">
            <span></span>
          </button> */}
    </nav>
  );
}

// export default Navbar;
