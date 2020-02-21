import React from "react";
import classes from "./MainLayout.module.css";

const MainLayout = props => (
  <div>
    <div className={classes.left}>{props.left}</div>
    <div className={classes.center}>{props.center}</div>
    <div className={classes.right}>{props.right}</div>
  </div>
);

export default MainLayout;
