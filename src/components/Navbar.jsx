import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav class="navbarContainer">
      <div class="logoContainer">
        <img src="HKLogo.svg" id="navLogo" />
      </div>
      <ul class="navbarTabs">
        <li class="flatten">
          <Link to="/">About</Link>
        </li>
        <li class="flatten">
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li class="flatten">
          <Link to="/Resume">Resume</Link>
        </li>
        <li class="flatten">
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
