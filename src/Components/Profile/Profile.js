import React from "react";
import AccountCircle from "../../Assets/Icons/user.png";
import classes from "./Profile.module.css";
import ListTile from "../../Components/ListTile/ListTile";
import ListTileProgressBar from "../../Components/ListTileProgressBar/ListTileProgressBar";
import CalendarIcon from "../../Assets/Icons/calendar.png";
import BookIcon from "../../Assets/Icons/book.png";
import ResourceIcon from "../../Assets/Icons/cv.png";
import SettingsIcon from "../../Assets/Icons/wheel.png";

const Profile = props => (
  <div className={classes.Profile}>
    <div style={{ padding: "10px 0px 15px 10px" }}>
      <strong>Profile</strong>
    </div>
    <div className={classes.AccountCircleContainer}>
      <img className={classes.Image} src={AccountCircle} alt="Account cirlce" />
    </div>
    <div style={{ textAlign: "center" }}>
      <strong>Abdulmalik Abubakar</strong>
    </div>
    <div style={{ textAlign: "center", color: "grey" }}>Student</div>
    <div style={{ paddingTop: "20px" }}>
      <div className={classes.ListTile}>
        <ListTileProgressBar
          icon={CalendarIcon}
          title="Place holder"
          subTitle="Place holder"
        ></ListTileProgressBar>
      </div>
      <div className={classes.ListTile} style={{ paddingTop: "20px" }}>
        <ListTileProgressBar
          icon={CalendarIcon}
          title="Place holder"
          subTitle="Place holder"
        ></ListTileProgressBar>
      </div>
    </div>
    <div className={classes.LinkLabel}>
      <div className={classes.Label}>
        <strong>Reminders</strong>
      </div>
      <div className={classes.LinkText}>
        <strong>See all</strong>
      </div>
    </div>
    <div className={classes.ListTiles}>
      <div className={classes.ListTile}>
        <ListTile
          icon={CalendarIcon}
          title="Place holder"
          subTitle="Place holder"
        ></ListTile>
      </div>
      <div className={classes.ListTile}>
        <ListTile
          icon={BookIcon}
          title="Place holder"
          subTitle="Place holder"
        ></ListTile>
      </div>
      <div className={classes.ListTile}>
        <ListTile
          icon={ResourceIcon}
          title="Place holder"
          subTitle="Place holder"
        ></ListTile>
      </div>
    </div>
  </div>
);

export default Profile;
