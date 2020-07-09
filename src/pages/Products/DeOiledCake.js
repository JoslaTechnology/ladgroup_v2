import React, { Fragment } from "react";
import product3 from "assets/product3copy.svg";
import product5 from "assets/product5.svg";

import { main, product_grid1, product_image, product_text, product_grid2, number, left } from "./style.module.css";

const DeOiledCake = () => {
  return (
    <Fragment>
      <div className={main}>
        <h1>De oiled Cake</h1>
      </div>

      <section>
        <div className="container">
          <div className={`${product_grid1} scale_effect`}>
            <p>Brief word about Ladgroup raw shea butter. What makes it different.</p>
            <div id={left} className={product_image}>
              <img src={product3} alt="raw shea" />
              <p>Our De oiled cake</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={`${product_grid2} scale_effect`}>
            <div className={product_image}>
              <img src={product5} alt="refined shea" />
              <p>Application</p>
            </div>
            <div className={product_text}>
              <p>
                <span className={number}>1</span>Livestock feed
              </p>
              <p>
                <span className={number}>2</span>Poultry feed
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default DeOiledCake;
