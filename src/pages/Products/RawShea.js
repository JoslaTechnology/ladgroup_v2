import React, { Fragment } from "react";
import product1 from "assets/product1copy.svg";
import product4 from "assets/product4copy.svg";

import { product_grid1, product_image, product_text, product_grid2, number} from "./style.module.css";
import {left, main } from "style/layout.module.css";


const RawShea = () => {
  return (
    <Fragment>
      <div className={main}>
        <h1>Raw shea butter</h1>
      </div>

      <section>
        <div className="container">
          <div className={`${product_grid1} scale_effect`}>
            <p>Brief word about Ladgroup raw shea butter. What makes it different.</p>
            <div id={left} className={`${product_image}`}>
              <img src={product1} alt="raw shea" />
              <p>Our raw shea butter</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={`${product_grid2} scale_effect`}>
            <div className={product_image}>
              <img src={product4} alt="refined shea" />
              <p>Application</p>
            </div>
            <div className={product_text}>
              <p>
                <span className={number}>1</span>Cosmetics
              </p>
              <p>
                <span className={number}>2</span>Food
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default RawShea;
