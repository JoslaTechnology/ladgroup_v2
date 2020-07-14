import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { Spinner } from "components/loader/FullPageSpinner";
import Button from "components/Button";

import product6 from "assets/product6.svg";
import product7 from "assets/product7.svg";
import process1 from "assets/process1.svg";
import process2 from "assets/process2.svg";
import process3 from "assets/process3.svg";
import process4 from "assets/process4.svg";
import process5 from "assets/process5.svg";

import {
  products,
  product_grid1,
  product_image,
  product_text2,
  product_grid2,
  process,
  process_group,
  number,
  left,
  order,
  order_text
} from "./style.module.css";

const DeOiledCake = lazy(() => import("./DeOiledCake"));
const OrganicShea = lazy(() => import("./OrganicShea"));
const RawShea = lazy(() => import("./RawShea"));

const Products = () => {
  let { path } = useRouteMatch();

  return (
    <div className={products}>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={`${path}/de-oiled-cake`} component={DeOiledCake} />
          <Route exact path={`${path}/organic-shea`} component={OrganicShea} />
          <Route exact path={`${path}/raw-shea`} component={RawShea} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </Suspense>

      <section>
        <div className="container">
          <div className={`${product_grid1} scale_effect`}>
            <p>
              Shea Butter, an all natural product, comes from the nuts of the Shea Tree and is the darling of the
              cosmetics industry. It is a skin nourishing emollient applied to the skin either in its pure form, or
              mixed in soaps, lotions, creams or shampoos.
            </p>
            <div id={left} className={product_image}>
              <img src={product6} alt="raw shea" />
              <p>Shea butter</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={`${product_grid2} scale_effect`}>
            <div className={product_image}>
              <img src={product7} alt="refined shea" />
              <p>Why choose us</p>
            </div>
            <div className={product_text2}>
              <p>
                <span className={number}>1</span>100% natural
              </p>
              <p>
                <span className={number}>2</span>Pure
              </p>
              <p>
                <span className={number}>3</span>Fine (particles) free
              </p>
              <p>
                <span className={number}>4</span>No smoky smell
              </p>
              <p>
                <span className={number}>5</span>Varying quantitiy
              </p>
              <p>
                <span className={number}>6</span>Safe and fast delivery method
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <h2>Our raw shea butter production</h2>
          <div className={process}>
            <div className={process_group}>
              <img src={process1} alt="Raw shea butter" />
              <p>Harvest</p>
              <h4>20kg of shea fruit</h4>
            </div>
            <div className={process_group}>
              <img src={process2} alt="Raw shea butter" />
              <p>Seed selection & Quality check</p>
              <h4>1-10 pieces</h4>
            </div>
            <div className={process_group}>
              <img src={process3} alt="Raw shea butter" />
              <p>Flitering & drying</p>
              <h4>6kg of dry shea nuts</h4>
            </div>
            <div className={process_group}>
              <img src={process4} alt="Raw shea butter" />
              <p>Shelling</p>
              <h4>6kg of shea kernels</h4>
            </div>
            <div className={process_group}>
              <img src={process5} alt="Raw shea butter" />
              <p>First pressure</p>
              <h4>1.5kg of raw shea butter</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="order-now">
        <div className={order}>
          <div className={order_text}>
            <p>
              We manufacture and deliver essential raw shea butter to you
            </p>
            <Button label="Order now" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
