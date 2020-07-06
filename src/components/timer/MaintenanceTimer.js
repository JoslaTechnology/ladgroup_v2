import React from "react";
import Countdown from "./Countdown.jsx";
import Maintenance from "../maintenance/Maintenance.js";
const MaintenanceTimer = () => {
  // var someDate = new Date();
  var someDate = new Date("Tue, 14 Jul 2020 00:00:00 GMT");
  var numberOfDaysToAdd = 8;
  // someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
  someDate.setDate(someDate.getDate());
  return (
    <React.Fragment>
      <Countdown toDate={new Date(someDate)}>
        {props => (
          <Maintenance
            years={props.years}
            months={props.months}
            days={props.days}
            asDays={props.asDays}
            hours={props.hours}
            minutes={props.minutes}
            seconds={props.seconds}
          />
        )}
      </Countdown>
    </React.Fragment>
  );
};

export default MaintenanceTimer;
