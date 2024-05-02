import { Toolbar, IconButton, AppBar, Box, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import SwitchDarkMode from "./SwitchDarkMode";

const TopAppBar = () => {
  // Local states
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "unset" }}
      >
        <Toolbar>
          <IconButton
            onClick={handleMenuClick}
            size="large"
            edge="start"
            aria-label="menu"
            sx={{
              mr: 2,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        onClose={handleMenuClick}
      >
        <Box
          sx={{
            width: 400,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SwitchDarkMode />
        </Box>
      </Drawer>
    </>
  );
};

export default TopAppBar;
