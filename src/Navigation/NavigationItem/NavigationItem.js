import React from "react";
import classes from "./NavigationItem.module.css";

const NavigationItem = props => (
  <div className={classes.NavItemContainer}>
    <img className={classes.Image} src={props.icon} alt={props.altText} />
    <span className={classes.NavText}>{props.text}</span>
  </div>
);

export default NavigationItem;
