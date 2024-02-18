import { Grid } from "@mui/material";
import React, { useState } from "react";

import Dashboard from "../components/Dashboard";
import PrivacyPolicy from "../Sidecomponent/PrivacyPolicy"
import SideBar from "../components/SideBar";


const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");
 
  const handleSidebarItemClick = (item) => {
    setSelectedComponent(item);
  };

  const sideStyle = {
    backgroundColor: "#211515c9",
    height: "120vh",
    display: "flex",
    alignItems: "center",
  };

  return (
    <Grid container direction="row">
      <Grid direction={"column"} style={sideStyle} xs={2}>
        <SideBar  onItemClick={handleSidebarItemClick}/>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        sx={{ padding: "50px 5px 0 80px" }}
        xs={10}
      >
        {selectedComponent === "dashboard" && <Dashboard />}
        {selectedComponent === "privacyPolicy" && <PrivacyPolicy/>}
      </Grid>
    </Grid>
  );
};

export default Home;
