import React from "react";
import { ReactComponent as Banner } from "assets/banner.svg";
import { main, container } from "./style.module.css";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <main className={main}>
        <h1>Pioneering in oil-seed processing in Nigeria</h1>
      </main>
      <section>
        <div className="container">
          <h2>Our commitment to you</h2>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
