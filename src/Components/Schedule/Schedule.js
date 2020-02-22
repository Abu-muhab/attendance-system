import React from "react";
import classes from "./Schedule.module.css";
import DayIndicator from "../../Components/DayIndicator/DayIndicator";
import ScheduleItem from "../Schedule/ScheduleItem/ScheduleItem";
import BookIcon from "../../Assets/Icons/book.png";
import CVIcon from "../../Assets/Icons/cv.png";

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
    <div style={{ padding: "15px", paddingTop: "30px" }}>
      <ScheduleItem
        icon={BookIcon}
        title="Spoken english class"
        subTitle="9:00 AM - 12:00 PM"
        time="9:00 AM"
      ></ScheduleItem>
      <ScheduleItem
        icon={CVIcon}
        title="Operating Systems"
        subTitle="12:00 PM - 2:00 PM"
        time="12:00 PM"
      ></ScheduleItem>
    </div>
    <div className={classes.ButtonContainer}>
      <button className={classes.ScheduleButton} type="button">
        View Schedule
      </button>
    </div>
  </div>
);

export default Schedule;
