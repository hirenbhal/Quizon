import "../App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Nvbar() {
  const [showCollapsedMenu, setCollapseMenu] = useState(false);
  const toggleMenu = () => {
    setCollapseMenu(() => !showCollapsedMenu);
  };

  const show = showCollapsedMenu ? "show" : "";

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" style={{ fontSize: "2rem" }} href="/">
            Quizon
          </a>
          <button
            onClick={toggleMenu}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={"collapse navbar-collapse " + show} id="navbarNav">
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item">
                {" "}
                <a href="/login" className="nav-link smoothScroll">
                  Login
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a href="/register" className="nav-link smoothScroll">
                  Register
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nvbar;
