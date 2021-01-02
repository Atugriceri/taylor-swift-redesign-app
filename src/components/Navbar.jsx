import React from "react";
import { ModeContext } from "../context/ModeContext";
import ModeAPIButton from "./ModeAPIButton";
import { Link } from "react-router-dom";

function Navbar(props) {
  const modeContextAPI = React.useContext(ModeContext);

  const { backgroundColor, textColor, mode } = modeContextAPI.modeObj;

  return (
    <div>
      <div
        className={`text-center pt-2 ${textColor} ${backgroundColor} navbar-${mode} text-center pt-4`}
      >
        <Link className="navbar-brand" href="/">
          taylor swift
        </Link>
      </div>

      <nav
        className={`navbar navbar-expand navbar-${mode} ${backgroundColor} text-center`}
      >
        <div className="container-fluid">
          <div className="navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <Link className="nav-link" to="/">
                home
              </Link>
              <Link className="nav-link" to="/about">
                about
              </Link>
              <Link className="nav-link" to="/shop">
                shop
              </Link>
              <ModeAPIButton />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
