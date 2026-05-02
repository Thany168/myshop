// src/layouts/Header.jsx
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Tooltip,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon, Fullscreen, GridView } from "@mui/icons-material";
import { DRAWER_WIDTH } from "./Sidebar";

export default function Header({ onMenuClick }) {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { md: `${DRAWER_WIDTH}px` },
        bgcolor: "#e91e8c",
        zIndex: (theme) => theme.zIndex.drawer - 1,
      }}
    >
      <Toolbar sx={{ minHeight: "56px !important", px: 2 }}>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 1, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        {/* Right actions */}
        <Tooltip title="Fullscreen">
          <IconButton color="inherit" size="small">
            <Fullscreen />
          </IconButton>
        </Tooltip>
        <Tooltip title="Apps">
          <IconButton color="inherit" size="small" sx={{ ml: 0.5 }}>
            <GridView />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
