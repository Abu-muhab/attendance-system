import React, { Component } from "react";
import logo from "./logo.svg";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import SideDrawer from "./Navigation/SideDrawer/SideDrawer";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import "./App.module.css";

class App extends Component {
  render() {
    return (
      <MainLayout
        left={<SideDrawer></SideDrawer>}
        center={<Dashboard></Dashboard>}
        right={<Profile></Profile>}
      />
    );
  }
}

export default App;
