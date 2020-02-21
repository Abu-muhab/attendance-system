import React from "react";
import classes from "./DayIndicator.module.css";

const DayIndicator = props => (
  <div className={classes.DayIndicator}>
    <div className={classes.PreviousDay}>Mon</div>
    <div className={classes.PreviousDay}>Tue</div>
    <div className={classes.CurrentDay}>Wed</div>
    <div className={classes.FutureDay}>Thur</div>
    <div className={classes.FutureDay}>Fri</div>
    <div className={classes.FutureDay}>Sat</div>
    <div className={classes.FutureDay}>Sun</div>
  </div>
);

export default DayIndicator;
