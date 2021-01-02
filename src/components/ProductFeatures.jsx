import React from "react";
import { useParams } from "react-router-dom";
import { productList } from "../products/productList";
import { ModeContext } from "../context/ModeContext";
import ModeAPIButton from "./ModeAPIButton";

function ProductFeatures(props) {
  const { productID } = useParams();
  const modeContextAPI = React.useContext(ModeContext);

  const { backgroundColor, textColor } = modeContextAPI.modeObj;

  const product = productList.filter(item => item._id === Number(productID));

  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-5">
          <img className="w-75 rounded-img" src={product[0].imgUrl} />
        </div>
        <div className={`col-7 align-self-center ${textColor}`}>
          <h2>{product[0].title}</h2>
          <p>{product[0].detail}</p>
          <p>{product[0].price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductFeatures;
