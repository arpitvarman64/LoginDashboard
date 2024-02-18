import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PolicyIcon from "@mui/icons-material/Policy";
import HomeIcon from "@mui/icons-material/Home";

const Footer = () => {
  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#f5f5f5", // Adjust the background color as needed
        justifyContent: "space-evenly",

        borderTop: "1px solid #ddd", // Optional border at the top of the footer
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
      <BottomNavigationAction
        label="Privacy Policy"
        icon={<PolicyIcon />}
        component={Link}
        href="/privacyPolicy" // Replace with your actual privacy policy URL
        alt="_blank"
        rel="noopener noreferrer"
      />

      <Typography variant="body2" color="textSecondary">
        @ 2024 Your Company
      </Typography>
    </BottomNavigation>
  );
};

export default Footer;
