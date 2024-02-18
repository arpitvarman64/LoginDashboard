import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const Card3 = () => {
  const whiteTextStyle = {
    color: "white",
  };
  const gradientStyle = {
    background: "linear-gradient(to right, #e5c197, #830230)",
    padding: "20px",
    borderRadius: "10px",
  };
  return (
    <Box>
      <Paper style={gradientStyle}>
        <Typography
          display="flex"
          justifyContent="space-between"
          style={whiteTextStyle}
        >
          <span>New Contacts</span>
          <span>-5%</span>
        </Typography>

        <Typography fontWeight="400" fontSize="30px" style={whiteTextStyle}>
          75
        </Typography>

        <Typography fontSize="13px" style={whiteTextStyle}>
          172,458 Target user
        </Typography>
      </Paper>
    </Box>
  );
};

export default Card3;
