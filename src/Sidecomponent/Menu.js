import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate()
  const DeleteData = ()=>{
    localStorage.clear();
navigate("/")
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          fontSize: { xs: "10px", sm: "12px", lg: "16px" },
          color: "#6e8192",
        }}
      >
        <Typography fontFamily="Figtree" textTransform="none">
          Arpit Varman{" "}
          <span>
            <IconButton style={{ color: "#6e8192" }}>
              <ArrowDropDownIcon />
            </IconButton>
          </span>
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={DeleteData}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
