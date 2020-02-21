import React from "react";
import classes from "./Schedule.module.css";
import DayIndicator from "../../Components/DayIndicator/DayIndicator";

const Schedule = props => (
  <div className={classes.Schedule}>
    <div className={classes.Title}>
      <div>
        <strong>My schedule</strong>
      </div>
      <div style={{ color: "red", fontSize: "0.7em" }}>
        <strong>TODAY</strong>
      </div>
    </div>
    <div className={classes.DayIndicator}>
      <DayIndicator></DayIndicator>
    </div>
  </div>
);

export default Schedule;
