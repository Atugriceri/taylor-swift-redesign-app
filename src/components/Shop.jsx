import React from "react";
import { productList } from "../products/productList";
import { Link, Switch, Route } from "react-router-dom";
import ProductFeatures from "./ProductFeatures";
import { ModeContext } from "../context/ModeContext";
import ModeAPIButton from "./ModeAPIButton";

function Shop(props) {
  const modeContextAPI = React.useContext(ModeContext);
  const {
    backgroundColor,
    textColor,
    mode,
    cardBg,
    cardText
  } = modeContextAPI.modeObj;

  const productsMap = productList.map(item => (
    <div className="col">
      <div className={`card rounded-card h-100 ${cardBg}`}>
        <Link className="text-decoration-none" to={`/shop/${item._id}`}>
          <img
            className="w-100 mb-3 product-img card-img-top rounded-img img-fluid"
            src={item.imgUrl}
          />
          <div className="card-body">
            <h5 className={`card-body ${cardText}`}>{item.title}</h5>
            <p className={`card-text ${cardText}`}>{item.price}</p>
          </div>
        </Link>
      </div>
    </div>
  ));

  return (
    <div className={`${backgroundColor}`}>
      <div className="container text-center pt-3">
        <h1 className={`mb-4 ${textColor}`}>shop</h1>
        <div className="row row-cols-1 row-cols-md-3 g-5 pb-5">
          {productsMap}
        </div>
        <Switch>
          <Route path="/shop/:productID">
            <ProductFeatures />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Shop;
