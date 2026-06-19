// src/layouts/Header.jsx
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Tooltip,
  Typography,
  Avatar,
} from "@mui/material";
import { Menu as MenuIcon, Fullscreen, GridView } from "@mui/icons-material";
import { DRAWER_WIDTH } from "./Sidebar";

export default function Header({ onMenuClick }) {
  const handleLogout = () => {};
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { md: `${DRAWER_WIDTH}px` },
        bgcolor: "#ffffff", //header-color
        zIndex: (theme) => theme.zIndex.drawer - 1,
      }}
    >
      {" "}
      <Toolbar sx={{ minHeight: "56px !important", px: 2 }}>
        <IconButton
          color="#0000"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 1, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        {/* Right actions */}

        <Tooltip title="UserProfile">
          <Avatar onClick={handleLogout}></Avatar>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
