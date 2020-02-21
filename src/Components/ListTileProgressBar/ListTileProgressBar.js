import React from "react";
import classes from "./ListTileProgressBar.module.css";

const ListTileProgressBar = props => (
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
        <div className={classes.ProgressBarContainer}>
          <div className={classes.ProgressBar}>
            <div className={classes.Progress}></div>
          </div>
          <div>
            <strong>50 %</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ListTileProgressBar;
