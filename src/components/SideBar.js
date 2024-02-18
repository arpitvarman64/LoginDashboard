import { Avatar, Divider } from "@mui/material";
import React from "react";
import tomcruise from "../Assets/TomCruise.jpg";
import Menu from "../Sidecomponent/Menu";
import Sidebutton from "../Sidecomponent/Sidebutton";

const SideBar = ({ onItemClick }) => {
  return (
    <>
      <Avatar
        alt="Remy Sharp"
        src={tomcruise}
        sx={{
          mt: "20px",
          height: { sm: "30px", lg: "70px" },
          width: { sm: "30px", md: "70px" },
        }}
      />
      <Menu />
      <Sidebutton onItemClick={onItemClick} />
      <Divider />
    </>
  );
};

export default SideBar;
