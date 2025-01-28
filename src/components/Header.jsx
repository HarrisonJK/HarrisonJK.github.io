import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <div className="headerContainer">
      <div className="headerEmptyLeft">
        <a className="fa fa-linkedin transparent"></a>
        &nbsp;
        <a className="fa fa-github transparent"></a>
        &nbsp;
        <a className="fa fa-instagram transparent"></a>
        &nbsp;
        <a className="fa fa-envelope transparent"></a>
      </div>

      {/* Conditionally render*/}
      {location.pathname !== "/" && (
        <div className="HKHeader">
          <svg className="svg">
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="80%">
                Harrison Katapodis
              </text>
            </symbol>
            <g className="g-ants">
              <use href="#s-text" className="HK"></use>
              <use href="#s-text" className="HK"></use>
              <use href="#s-text" className="HK"></use>
              <use href="#s-text" className="HK"></use>
            </g>
          </svg>
        </div>
      )}

      <div className="headerLogosRight header">
        <a
          className="fa fa-linkedin noStyle"
          href="https://www.linkedin.com/in/harrisonhjk/"
        ></a>
        &nbsp;
        <a
          className=" fa fa-github noStyle"
          href="https://github.com/HarrisonJK"
        ></a>
        &nbsp;
        <a
          className="fa fa-instagram noStyle"
          href="https://www.instagram.com/harrisonhjk_/"
        ></a>
        &nbsp;
        <a
          className="fa fa-envelope noStyle"
          href="mailto:hjk72@cornell.edu"
        ></a>
      </div>
    </div>
  );
}
