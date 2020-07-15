import React, { Component } from "react";
// import Header from "../template/Header";
// import { AccountConsumer } from "../../account-context/AccountProvider";

import "./maintenance.css";

class Maintenance extends Component {
  state = {
    username: "",
    dateJoined: "",
    membershipLevel: ""
  };

  render() {
    const { asDays, hours, minutes, seconds } = this.props;
    return (
      <React.Fragment>
        <div className="duration text-light mt-5">
          <span ><sup className="countDownSup">DAYS</sup> <span className="countDown">{String(asDays).padStart(1, 0)}</span></span>
          <span className="px-5"><sup className="countDownSup">HOURS</sup> <span className="countDown">{String(hours).padStart(2, 0)}</span></span>
          <span ><sup className="countDownSup">MINUTES</sup> <span className="countDown">{String(minutes).padStart(2, 0)}</span> </span>
          {/* <span ><sup className="countDownSup">SECONDS</sup> <span className="countDown">{String(seconds).padStart(2, 0)}</span> </span> */}
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
      </React.Fragment>
    );
  }
}

// Maintenance.contextType = AccountConsumer;
export default Maintenance;
