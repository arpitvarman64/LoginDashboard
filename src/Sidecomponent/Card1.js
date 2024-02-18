import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const Card1 = () => {
  const whiteTextStyle = {
    color: "white",
  };
  const gradientStyle = {
    background: "linear-gradient(to right, #c2c8d9, #8003bd)",
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
          <span>Visitors</span>
          <span>+10%</span>
        </Typography>

        <Typography fontWeight="400" fontSize="30px" style={whiteTextStyle}>
          13.7K
        </Typography>

        <Typography fontSize="13px" style={whiteTextStyle}>
          172,458 Target user
        </Typography>
      </Paper>
    </Box>
  );
};

export default Card1;
