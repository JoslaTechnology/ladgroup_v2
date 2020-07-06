import React, { Fragment, useState, USEeFF } from "react";
import MetaTags from 'react-meta-tags';
import EnquiryModal from "components/EnquiryModal/EnquiryModal";
import SupplierModal from "components/SupplierModal/SupplierModal";
import DistributorModal from "components/DistributorModal/DistributorModal";
import { ReactComponent as Logo2 } from "assets/logoNew.svg";
import { ReactComponent as Mail } from "assets/mailboxNew.svg";
import { ReactComponent as Phone } from "assets/phoneNew.svg";
import { ReactComponent as Location } from "assets/location.svg";
import bags from "assets/bags.svg";
import butter from "assets/plate.svg";
import logo from "assets/logo.png";
import grid1 from "assets/productPack.svg";
import Button from "components/Button";
import ContactForm from "../ContactForm";
import MaintenanceTimer from "components/timer/MaintenanceTimer";

import {
  main, contact, contactform, footer, items, hero_text, grid, countDown, countDownSup,
  companyDetail, requestBody, homeBorder, bgLanding, mobilAdd
} from "./style.module.css";



const Home = () => {
  // declare state
  const [showModal, setShowModal] = useState(false);
  const [showDistModal, setShowDistModal] = useState(false);
  const [showSupModal, setShowSupModal] = useState(false);
  const [activeModal, setActiveModal] = useState('')

  // set state for enquiry modal to display
  const handleEnquiry = (data) => { setShowModal(data); setActiveModal(1); }

  const handleSupplier = (data) => { setShowSupModal(data); setActiveModal(3); }

  const handleDistribution = (data) => {
    setShowDistModal(data); setActiveModal(2);
    console.log("data", data);
  }


  // set state to close enquiry modal
  const hideModal = (data) => { setShowModal(data); }

  // set state to close enquiry modal
  const hideDistModal = (data) => { setShowDistModal(data); }

  // set state to close enquiry modal
  const hideSupModal = (data) => { setShowSupModal(data); }
  return (
    <Fragment>
      <MetaTags>
        <title>LadGroup: Pioneer in oil-seed processing in Nigeria</title>
        <meta name="description" content="At Ladgroup, we are pioneer in oil-seed processing in Nigeria, products ranging from ladshea " />
        <meta property="og:title" content="LadGroup" />
        <meta property="keywords" content="sheabutter, ladshea" />
      </MetaTags>
      <header>
        <nav>
          <Logo2 />
          <div className={contact}>
            <div>
              <div className="text-center"><Phone /></div>
              <div className="pt-2">
                <a target="_blank" style={{ fontSize: '14px', color: '#0D6797' }} rel="noopener noreferrer" className=" " href="tel:234-813-030-2400">08130302400</a>
              </div>
            </div>
            <div>

              <div className="text-center"><Mail /></div>
              <div className="pt-2"><a target="_blank" style={{ fontSize: '14px', color: '#0D6797' }} rel="noopener noreferrer" className="" href="mailto: shea-sales@ladgroup.org">shea-sales@ladgroup.org</a>
              </div>
            </div>
          </div>





        </nav>

        {/* for mobile view */}
        <div id={mobilAdd} className="text-center">

          <div className={companyDetail}>
            <div className="pr-3">
              <Phone />
              <div className="pt-2">
                <a target="_blank" style={{ fontSize: '12px', color: '#0D6797' }} rel="noopener noreferrer" className=" " href="tel:234-813-030-2400">08130302400</a>
              </div>
            </div>
            <div>
              <Mail />
              <div className="pt-2"><a target="_blank" style={{ fontSize: '13px', color: '#0D6797' }} rel="noopener noreferrer" className="" href="mailto: shea-sales@ladgroup.org">shea-sales@ladgroup.org</a>
              </div>
            </div>
          </div>
        </div>



        <div className={bgLanding}>
          <div className="pt-5"></div>
          <div className={hero_text}>
            <h1 className="text-light">Pioneering in oil-seed processing in Nigeria</h1>
            <p className="text-light mt-5">
              Welcome... Kindly note that our website is currently under development Kindly check back in....
          </p>
            {/* Practice Timer */}
            <MaintenanceTimer />
          </div>


          {/* dummy timer */}
          {/* <div className="duration text-light">
            <span ><sup className={countDownSup}>DAYS</sup> <span className={countDown}>8</span></span>
            <span className="px-3"><sup className={countDownSup}>HOURS</sup> <span className={countDown}>9</span></span>
            <span ><sup className={countDownSup}>MINUTES</sup> <span className={countDown}>30</span> </span> 
          </div> */}
          {/* <span>
            <sup>DAYS</sup>
            <h1>10</h1>
          </span>
          <span>
            <sup>HOURS</sup>
            <h1>10</h1>
          </span>
          <span>
            <sup>MINUTES</sup>
            <h1>10</h1>
          </span> */}

        </div>
        {/* </div> */}
      </header>
      {/* <section className={main}>
        <div className="container py-4">
          <div className="text-center">
            <h4>Are you a dealer? If yes, please fill the form below</h4>
            <p>DEALER DATA CAPTURE</p>
          </div>
          <div className={`py-5 ${contactform}`}>
            <ContactForm />
          </div>
        </div>
      </section> */}

      <main>
        <h1 className="my-5" style={{ color: '#DCA438' }}><b>Lad Shea</b></h1>
        <p className="pb-5 h2">100% natural, organic shea butter with no smoky smell</p>

        <section className={grid}>
          <img src={butter} alt="bowl of butter" />
          <aside>
            <h2>General Enquiry</h2>
            <p className={requestBody}>
              Want to make an enquiry about our different range of products and services? Feel free
              to reach out to us.
            </p>
            <Button onClick={() => handleEnquiry(true)} label="Make enquiry" />
          </aside>
        </section>

        <section className={grid}>
          <aside>
            <h2>Distributor Registration</h2>
            <p className={requestBody}>
              Are you a distributor in the shea butter sector? Kindly click on the link below to
              register as one of our distributors.
            </p>
            <Button onClick={() => handleDistribution(true)} label="Register" />
          </aside>
          <img src={bags} alt="agro sacks" />
        </section>

        <section className={grid}>
          <img src={grid1} alt="nuts" />
          <aside>
            <h2>Supplier Registration</h2>
            <p className={requestBody}>
              Do you deal in supplying of resources and equipments (e.g sheanut, diesel, spare
              parts, etc)? Why not join our list of suppliers .
            </p>
            <Button onClick={() => handleSupplier(true)} label="Register" />
          </aside>
        </section>
      </main>

      {/* display Enquiry Modal */}
      {activeModal === 1 && <EnquiryModal showModal={showModal} closeModal={hideModal} />}
      {activeModal === 2 && <DistributorModal showModal={showDistModal} closeModal={hideDistModal} />}
      {activeModal === 3 && <SupplierModal showModal={showSupModal} closeModal={hideSupModal} />}
      <footer className={`text-center py-5 ${footer}`}>
        {/* <h2>LadGroup</h2> */}
        <hr className="px-2" id={homeBorder} />
        <img src={logo} alt="ladgroup logo" className="mt-2" />
        <div className={`${items}`}>
          <div className="pt-3">
            <Location />
            <p style={{ color: '#525E59' }}>
              Factory/office address - Kilometer 4, Sagamu Benin Expressway, Ikenne-Remo, Ogun State, Nigeria.
            </p>
          </div>
          <div className="py-3">
            <Location />
            <p style={{ color: '#525E59' }}>Office address - 24, Abimbola Street, Ilasamaja Isolo, Lagos, Nigeria.</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Home;
