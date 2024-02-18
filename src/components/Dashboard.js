import { Grid } from "@mui/material";
import React from "react";
import Card1 from "../Sidecomponent/Card1";
import Card2 from "../Sidecomponent/Card2";
import Card3 from "../Sidecomponent/Card3";
import Charts from "../Sidecomponent/Charts";
import Charts2 from "../Sidecomponent/Charts2";

const Mainbody = () => {
  return (
    <Grid
      container
      gap={2}
      xs={12}
      sx={{ height: "fit-content", width: "fit-content" }}
    >
      <Grid item md={3.5} sm={12} xs={12}>
        <Card1 />
      </Grid>
      <Grid item md={3.5} sm={12} xs={12}>
        <Card2 />
      </Grid>
      <Grid item md={3.5} sm={12} xs={12}>
        <Card3 />
      </Grid>
      <Grid item md={5} sm={10} sx={{ margin: "10px" }}>
        <Charts />
      </Grid>
      <Grid item md={5} sm={10} sx={{ margin: "10px" }}>
        <Charts2 />
      </Grid>
    </Grid>
  );
};

export default Mainbody;
