import React from "react";
import classes from "./SideDrawer.module.css";
import "./SideDrawer.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import DashboardIcon from "../../Assets/Icons/dashboard.png";
import CalendarIcon from "../../Assets/Icons/calendar.png";
import BookIcon from "../../Assets/Icons/book.png";
import ResourceIcon from "../../Assets/Icons/cv.png";
import SettingsIcon from "../../Assets/Icons/wheel.png";

const SideDrawer = props => (
  <div className={classes.SideDrawer}>
    <div style={{ textAlign: "center", padding: "10px 0px 70px 0px" }}>
      <strong>AM</strong>
      <span>
        <strong style={{ color: "blue" }}>Sys</strong>
      </span>
    </div>
    <ul className={classes.NavList}>
      <NavigationItem
        icon={DashboardIcon}
        text="Dashboard"
        altText="Dashboard"
      ></NavigationItem>
      <NavigationItem
        icon={BookIcon}
        text="Courses"
        altText="Courses"
      ></NavigationItem>
      <NavigationItem
        icon={CalendarIcon}
        text="Timetable"
        altText="Timetable"
      ></NavigationItem>
      <NavigationItem
        icon={ResourceIcon}
        text="Resources"
        altText="Resources"
      ></NavigationItem>
      <NavigationItem
        icon={SettingsIcon}
        text="Settings"
        altText="Settings"
      ></NavigationItem>
    </ul>
  </div>
);

export default SideDrawer;
