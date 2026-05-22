import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Badge,
} from "@mui/material";
import {
  Dashboard,
  ShoppingCart,
  Inventory2,
  Category,
  People,
  BarChart,
  LocalOffer,
  Inbox,
  HelpOutlineOutlined,
  SystemUpdateAlt,
  PersonOutlined,
  SettingsOutlined,
  Logout,
} from "@mui/icons-material";
import { Route } from "react-router-dom";

const DRAWER_WIDTH = 220;

const BG = "#1a2236";
const ACTIVE_BG = "rgba(255,255,255,0.12)";
const HOVER_BG = "rgba(255,255,255,0.06)";
const TEXT_MUTED = "#8b9ab5";
const TEXT_ACTIVE = "#ffffff";
const TEXT_SECTION = "#4e5d78";

const mainNav = [
  {
    label: "Dashboard",
    icon: <Dashboard fontSize="small" />,
    path: "/dashboard",
  },
  {
    label: "Orders",
    icon: <ShoppingCart fontSize="small" />,
    path: "/orders",
    badge: 16,
  },
  {
    label: "Products",
    icon: <Inventory2 fontSize="small" />,
    path: "/products",
  },
  {
    label: "Categories",
    icon: <Category fontSize="small" />,
    path: "/category",
  },
  {
    label: "Customers",
    icon: <People fontSize="small" />,
    path: "/customer",
  },
  { label: "Reports", icon: <BarChart fontSize="small" />, path: "/reports" },
  { label: "Coupons", icon: <LocalOffer fontSize="small" />, path: "/coupons" },
  { label: "Inbox", icon: <Inbox fontSize="small" />, path: "/inbox" },
];

const infoNav = [
  {
    label: "Knowledge Base",
    icon: <HelpOutlineOutlined fontSize="small" />,
    path: "/knowledge",
  },
  {
    label: "Product Updates",
    icon: <SystemUpdateAlt fontSize="small" />,
    path: "/updates",
  },
];

const settingsNav = [
  {
    label: "Personal Settings",
    icon: <PersonOutlined fontSize="small" />,
    path: "/setting",
  },
];

const itemSx = {
  borderRadius: "8px",
  mx: 1,
  mb: 0.25,
  py: 0.9,
  px: 1.25,
  color: TEXT_MUTED,
  "& .MuiListItemIcon-root": { color: TEXT_MUTED, minWidth: 34 },
  "&:hover": {
    backgroundColor: HOVER_BG,
    color: "#c8d3e8",
    "& .MuiListItemIcon-root": { color: "#c8d3e8" },
  },
};

const activeSx = {
  backgroundColor: ACTIVE_BG,
  color: TEXT_ACTIVE,
  "& .MuiListItemIcon-root": { color: TEXT_ACTIVE },
  "&:hover": {
    backgroundColor: ACTIVE_BG,
    color: TEXT_ACTIVE,
  },
};

function NavItem({ item }) {
  const location = useLocation();
  const isActive =
    item.path === "/"
      ? location.pathname === item.path
      : location.pathname.startsWith(item.path);

  return (
    <ListItemButton
      component={NavLink}
      to={item.path}
      sx={{ ...itemSx, ...(isActive ? activeSx : {}) }}
    >
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText
        primary={item.label}
        primaryTypographyProps={{
          fontSize: 13.5,
          fontWeight: isActive ? 600 : 400,
        }}
      />
      {item.badge && (
        <Box
          sx={{
            bgcolor: "#fff",
            color: BG,
            fontSize: 11,
            fontWeight: 700,
            borderRadius: "20px",
            px: 0.9,
            py: 0.1,
            lineHeight: "18px",
          }}
        >
          {item.badge}
        </Box>
      )}
    </ListItemButton>
  );
}

function SectionLabel({ label }) {
  return (
    <Typography
      sx={{
        fontSize: 11,
        color: TEXT_SECTION,
        fontWeight: 500,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        px: 2.25,
        pt: 1.5,
        pb: 0.75,
      }}
    >
      {label}
    </Typography>
  );
}

export default function Sidebar({ mobileOpen, onClose }) {
  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: BG,
      }}
    >
      {/* Brand */}
      <Box
        sx={{
          px: 2,
          py: 2.5,
          display: "flex",
          alignItems: "center",
          gap: 1.25,
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "8px",
            bgcolor: "#3b82f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          V
        </Box>
        <Typography
          fontSize={14}
          fontWeight={600}
          color="#fff"
          letterSpacing="0.01em"
        >
          VIP KDMVSTORE
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mx: 2, mb: 1 }} />

      {/* Main nav */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          "&::-webkit-scrollbar": { width: 4 },
          "&::-webkit-scrollbar-track": { background: "transparent" },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(255,255,255,0.12)",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "rgba(255,255,255,0.22)",
          },
        }}
      >
        <List disablePadding sx={{ px: 0 }}>
          {mainNav.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </List>

        {/* Other Information */}
        <SectionLabel label="Other Information" />
        <List disablePadding>
          {infoNav.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </List>

        {/* Settings */}
        <SectionLabel label="Settings" />
        <List disablePadding>
          {settingsNav.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </List>
      </Box>

      {/* Logout */}
      <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mx: 2 }} />
      <List sx={{ py: 1 }}>
        <ListItemButton
          sx={{
            ...itemSx,
            "&:hover": {
              backgroundColor: HOVER_BG,
              color: "#ef4444",
              "& .MuiListItemIcon-root": { color: "#ef4444" },
            },
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{ fontSize: 13.5 }}
          />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            bgcolor: BG,
            border: "none",
          },
        }}
      >
        {content}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            bgcolor: BG,
            border: "none",
          },
        }}
        open
      >
        {content}
      </Drawer>
    </Box>
  );
}

export { DRAWER_WIDTH };
