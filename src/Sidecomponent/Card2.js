import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const Card2 = () => {
  const whiteTextStyle = {
    color: "white",
  };
  const gradientStyle = {
    background: "linear-gradient(to right, #207100,#d5e54a)",
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
          <span>Bounce Rate</span>
          <span>+10%</span>
        </Typography>

        <Typography fontWeight="400" fontSize="30px" style={whiteTextStyle}>
          41.6%
        </Typography>
        
        <Typography fontSize="13px" style={whiteTextStyle}>
          472458 Targeted Target Users
        </Typography>
      </Paper>
    </Box>
  );
};

export default Card2;
