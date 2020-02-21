import React from "react";
import AccountCircle from "../../Assets/Icons/user.png";
import classes from "./Profile.module.css";

const Profile = props => (
  <div className={classes.Profile}>
    <div style={{ padding: "10px 0px 40px 10px" }}>
      <strong>Profile</strong>
    </div>
    <div className={classes.AccountCircleContainer}>
      <img className={classes.Image} src={AccountCircle} alt="Account cirlce" />
    </div>
    <div style={{ textAlign: "center" }}>
      <strong>Abdulmalik Abubakar</strong>
    </div>
    <div style={{ textAlign: "center", color: "grey" }}>Student</div>
  </div>
);

export default Profile;
