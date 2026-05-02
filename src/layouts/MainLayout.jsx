// src/layouts/MainLayout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";

import Header from "./Header";
import Sidebar, { DRAWER_WIDTH } from "./Sidebar";
import Footer from "./Footer";

export default function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* ─── Sidebar ─── */}
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* ─── Main column ─── */}
      <Box
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
        }}
      >
        {/* ─── Header ─── */}
        <Header onMenuClick={() => setMobileOpen(true)} />

        {/* Spacer so content sits below the fixed AppBar */}
        <Toolbar sx={{ minHeight: "56px !important" }} />

        {/* ─── Page content ─── */}
        <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
          <Outlet />
        </Box>

        {/* ─── Footer ─── */}
        <Footer />
      </Box>
    </Box>
  );
}
