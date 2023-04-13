import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div class="entireNavbar">
      <div class="container">
        <nav class="navbarSite">
          <img src="HKLogo.svg" id="navLogo" />
          <ul class="navbarTabs">
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
          {/* <button class="mobileHamburger">
            <span></span>
          </button> */}
        </nav>
      </div>
    </div>
  );
}

// export default Navbar;
