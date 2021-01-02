import React from "react";
import { ModeContext } from "../context/ModeContext";
import ModeAPIButton from "./ModeAPIButton";

function Footer(props) {
  const modeContextAPI = React.useContext(ModeContext);

  const { backgroundColor, textColor } = modeContextAPI.modeObj;

  return (
    <footer
      className={[backgroundColor, textColor, "py-5", "text-center"].join(" ")}
    >
      <div className="container">
        <p className="pt-3">© 2020 Taylor Swift All Rights Reserved.</p>
        <p className="mb-1">
          Coded by{" "}
          <a
            href="https://github.com/Atugriceri"
            className={`${textColor}`}
            target="_blank"
          >
            Alper Tugriçeri
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
