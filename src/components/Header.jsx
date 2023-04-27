export function Header() {
  return (
    <div className="headerContainer">
      <div className="headerEmptyLeft">
        <a className="fa fa-linkedin transparent "></a>
        &nbsp;
        <a className=" fa fa-github transparent "></a>
        &nbsp;
        <a className="fa fa-instagram transparent "></a>
        &nbsp;
        <a className="fa fa-envelope transparent "></a>
      </div>
      <div className="header">Harrison Katapodis' Personal Website</div>
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
