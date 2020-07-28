import React, { Fragment } from "react";
import product1 from "assets/product1.svg";
import product2 from "assets/product2.svg";
import product3 from "assets/product3.svg";
import product4 from "assets/product4.svg";
import product8 from "assets/product8.svg";
import product9 from "assets/product9.svg";
import product10 from "assets/product10.svg";

import { product_grid1, product_image, product_text, product_text2, product_grid2, number } from "./style.module.css";
import { left, main } from "style/layout.module.css";

const DeOiledCake = () => {
  return (
    <Fragment>
      <div className={main}>
        <h1>De oiled Cake</h1>
      </div>

      <section>
        <div className="container">
          <div className={`${product_grid1} scale_effect`}>
            <p>
              Shea nut trees, also known as the vitellaria or Karite tree takes between 10 to 15 years before it starts
              bearing fruit and it could be as long as 30 years before full production is attained. The harvest season
              for the vitellaria tree fruits is from June to August. Then, millions of fruits are harvested and
              processed.
            </p>
            <div id={left} className={`${product_image}`}>
              <img src={product1} alt="raw shea" />
              <p>Seed harvest</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={`${product_grid1} scale_effect`}>
            <div className={product_image}>
              <img src={product2} alt="refined shea" />
              <p>Quality check</p>
            </div>
            <p>
              The harvested Sheanut kernels are carefully selected through our quality assurance grading process to
              ensure all harvested seed meet every standards before it goes into processing
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={`${product_grid1} scale_effect`}>
            <p>
              The graded kernels are first cleaned in the seed cleaner to rid the kernels of foreign matters like dust,
              stones, shells and metal tramps, then cracked into smaller particles. The cracked kernels are
              systematically heated at controlled temperatures in the cooker and the conditioner.
            </p>
            <div id={left} className={`${product_image}`}>
              <img src={product3} alt="raw shea" />
              <p>Seed cleaning</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={`${product_grid1} scale_effect`}>
            <div className={product_image}>
              <img src={product4} alt="refined shea" />
              <p>Processing & Production</p>
            </div>
            <p>
              The conditioned kernels are directed to the expellers where the screw worm assembly exerts considerable
              pressure to press out the butter and the cake. The pressed-out cakes are sent to the solvent extraction
              plant. In the solvent extraction plant, the cakes are brought in contact with food-grade hexane to release
              the butter. The butter-hexane mixture is sent to the distillation units to recover the hexane and release
              the butter. Both the expeller and the solvent extracted butter are filtered in the Pressure leaf filter to
              remove all fines and any other foreign particles.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={`${product_grid1} scale_effect`}>
            <p>
              The filtered butter is sent to the dryer where moisture is removed under vacuum at 120°C to give a pure,
              unrefined Sheabutter. The pure, unrefined Sheabutter is sent to the storage tank to cool to 45°C ready for
              packing or bulk-shipping.
            </p>
            <div id={left} className={`${product_image}`}>
              <img src={product8} alt="raw shea" />
              <p>Storage</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={`${product_grid2} scale_effect`}>
            <div className={product_image}>
              <img src={product9} alt="refined shea" />
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

      <section>
        <div className="container">
          <div className={`${product_grid2} scale_effect`}>
            <div className={product_text2}>
              <p>
                <span className={number}>1</span>100% natural
              </p>
              <p>
                <span className={number}>2</span>Pure and Fine (particles) free
              </p>
              <p>
                <span className={number}>3</span>Export grade
              </p>
              <p>
                <span className={number}>4</span>Produced in different quantity
              </p>
              <p>
                <span className={number}>5</span>No smoky smell
              </p>
              <p>
                <span className={number}>6</span>Safe and fast delivery method
              </p>
            </div>
            <div id={left} className={product_image}>
              <img src={product10} alt="refined shea" />
              <p>Why choose us</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default DeOiledCake;
