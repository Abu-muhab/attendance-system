import React from "react";
import classes from "./ScheduleItem.module.css";
import ListTile from "../../ListTile/ListTile";

const ScheduleItem = props => (
  <div className={classes.ScheduleItem}>
    <div className={classes.TimeStamp}>
      <div className={classes.Dot}></div>
      <div className={classes.Time}>{props.time}</div>
    </div>
    <div className={classes.ContentContainer}>
      <div className={classes.ContentSubContainer}>
        <div className={classes.ListTile}>
          <ListTile
            icon={props.icon}
            title={props.title}
            subTitle={props.subTitle}
          ></ListTile>
        </div>
      </div>
    </div>
  </div>
);

export default ScheduleItem;
