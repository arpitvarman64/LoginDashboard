import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PolicyIcon from "@mui/icons-material/Policy";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";


const Sidebutton = ({ onItemClick }) => {
  
  const navigate = useNavigate();
  const DeleteData = () => {
    localStorage.clear();
    navigate("/");
  };
  const btnStyle = {
    
    backgroundColor: "inherit",
    justifyContent: "space-between",
    "&:hover": {
      backgroundColor: "white",
    },
  };

  const iconButtonStyle = {
    color: "#8895a1",
  };

  const textStyle = {
    color: "#8895a1",
  };

  return (
    <Stack width="inherit">
      <Button
        sx={btnStyle}
        onClick={() => {
          onItemClick("dashboard");
        }}
      >
          <span>
            <IconButton sx={iconButtonStyle}>
              <QueryStatsIcon />
            </IconButton>
          </span>
          <Typography sx={textStyle}>Dashboard</Typography>
          <span>
            <IconButton sx={iconButtonStyle}>
              <ArrowDropDownIcon />
            </IconButton>
          </span>
        </Button>
      
     
        <Button
        sx={btnStyle}
        onClick={() => {
          onItemClick("privacyPolicy");
        }}
      >
        <span>
          <IconButton sx={iconButtonStyle}>
            <PolicyIcon />
          </IconButton>
        </span>
        <Typography sx={textStyle}>PRIVACY POLICY</Typography>
        <span>
          <IconButton sx={iconButtonStyle}>
            <ArrowDropDownIcon />
          </IconButton>
        </span>
      </Button>
      
      <Button onClick={DeleteData} sx={btnStyle}>
        <span>
          <IconButton sx={iconButtonStyle}>
            <LogoutIcon />
          </IconButton>
        </span>
        <Typography sx={textStyle}>LOG OUT</Typography>
        <span>
          <IconButton sx={iconButtonStyle}>
            <ArrowDropDownIcon />
          </IconButton>
        </span>
      </Button>
    </Stack>
  );
};

export default Sidebutton;
