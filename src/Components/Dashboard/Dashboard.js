import React from "react";
import classes from "./Dashboard.module.css";
import Schedule from "../../Components/Schedule/Schedule";
import MessagePreview from '../MessagePreview/MessagePreview';

const Dashboard = props => (
  <div className={classes.Dashboard}>
    <div className={classes.RowOne}>
      <div className={classes.Schedule}>
        <Schedule></Schedule>
      </div>
      <div className={classes.MessagePreview}>
        <MessagePreview></MessagePreview>
      </div>
    </div>
  </div>
);

export default Dashboard;
