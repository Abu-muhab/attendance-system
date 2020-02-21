import React from "react";
import classes from "./Dashboard.module.css";
import Schedule from "../../Components/Schedule/Schedule";

const Dashboard = props => (
  <div className={classes.Dashboard}>
    <div className={classes.RowOne}>
      <div className={classes.Schedule}>
        <Schedule></Schedule>
      </div>
    </div>
  </div>
);

export default Dashboard;
