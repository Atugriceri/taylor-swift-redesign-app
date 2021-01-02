import React from "react";
import { ModeContext } from "../context/ModeContext";
import ModeAPIButton from "./ModeAPIButton";
function Home(props) {
  const modeContextAPI = React.useContext(ModeContext);
  const { backgroundColor, textColor, mode } = modeContextAPI.modeObj;
  return (
    <div className={` bg-${mode}`}>
      <div className="container">
        <div className="row justify-content-md-center pt-5">
          <div className="col text-center">
            <img
              className="w-100 mw-100 img-fluid rounded-bottom"
              src="https://www.linkpicture.com/q/taylor-swift.jpg"
              alt="taylor-swift"
            />
            <h1 className={`pt-5 ${textColor}`}>
              reputation is out now everywhere!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
