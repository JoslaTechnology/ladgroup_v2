import React, { Fragment, Suspense, lazy, useState } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { Spinner } from "components/loader";
import Button from "components/Button";

import process1 from "assets/process1.svg";
import process2 from "assets/process2.svg";
import process3 from "assets/process3.svg";
import process4 from "assets/process4.svg";
import process5 from "assets/process5.svg";

import { process, process_group, order, order_text } from "./style.module.css";
import { sub_heading } from "style/layout.module.css";
import Modal from "components/Modal";
import PlaceOrderForm from "components/Forms/PlaceOrderForm";

const DeOiledCake = lazy(() => import("./DeOiledCake"));
const OrganicShea = lazy(() => import("./OrganicShea"));
const RawShea = lazy(() => import("./RawShea"));

const Products = () => {
  let { path } = useRouteMatch();
  const [placeOrderModal, setPlaceOrderModal] = useState(false);

  return (
    <Fragment>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={`${path}/de-oiled-cake`} component={DeOiledCake} />
          <Route exact path={`${path}/organic-shea`} component={OrganicShea} />
          <Route exact path={`${path}/raw-shea`} component={RawShea} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </Suspense>
      {placeOrderModal ? (
        <Modal close={setPlaceOrderModal}>
          <PlaceOrderForm setPlaceOrderModal={setPlaceOrderModal} />
        </Modal>
      ) : null}
      <section className="process">
        <div className="container">
          <h2 className={sub_heading}>Our raw shea butter production</h2>
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
            <p>We manufacture and deliver essential raw shea butter to you</p>
            <Button label="Order now" onClick={() => setPlaceOrderModal(true)} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Products;
