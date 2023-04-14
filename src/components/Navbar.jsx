import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav class="navbarContainer">
      <div class="logoContainer">
        <img src="HKLogo.svg" id="navLogo" />
      </div>
      <ul class="navbarTabs">
        <li class="navItem">
          <Link to="/">About</Link>
        </li>
        <li class="navItem">
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li class="navItem">
          <Link to="/Resume">Resume</Link>
        </li>
        <li class="navItem">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      {/* <button class="mobileHamburger">
            <span></span>
          </button> */}
    </nav>
  );
}

// export default Navbar;
