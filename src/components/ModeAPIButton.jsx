import React from "react";
import { ModeContext } from "../context/ModeContext";
import { Link } from "react-router-dom";

function ModeAPIButton(props) {
  const modeContextAPI = React.useContext(ModeContext);
  const { toggleMode } = modeContextAPI;
  const { btn } = modeContextAPI.modeObj;

  return (
    <Link className="nav-link" onClick={toggleMode}>
      {`${btn}`}
    </Link>
  );
}

export default ModeAPIButton;
