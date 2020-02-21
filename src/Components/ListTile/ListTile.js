import React from "react";
import classes from "./ListTile.module.css";

const ListTile = props => (
  <div className={classes.ListTile}>
    <div>
      <div className={classes.IconContainer}>
        <img className={classes.Image} src={props.icon} />
      </div>
      <div className={classes.TitleContainer}>
        <div className={classes.Title}>
          <strong>{props.title}</strong>
        </div>
        <div className={classes.SubTitle}>{props.subTitle}</div>
      </div>
    </div>
  </div>
);

export default ListTile;
