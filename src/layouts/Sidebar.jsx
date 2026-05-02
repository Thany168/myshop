// src/layouts/Sidebar.jsx
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import {
  Dashboard,
  Pets,
  Group,
  PersonAdd,
  MiscellaneousServices,
  ShoppingCart,
  Storefront,
  Person,
  Payment,
  Receipt,
  ManageAccounts,
  Logout,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { ROUTES } from "../constants/routes";

const DRAWER_WIDTH = 220;

const navItems = [
  { label: "Dashboard", icon: <Dashboard />, path: ROUTES.DASHBOARD },

  {
    label: "Management",
    icon: <Group />,
    children: [
      { label: "Client Form", icon: <PersonAdd />, path: ROUTES.CLIENT_FORM },
      {
        label: "Service",
        icon: <MiscellaneousServices />,
        path: ROUTES.SERVICE,
      },
      { label: "Order", icon: <ShoppingCart />, path: ROUTES.ORDER },
      { label: "Vendor", icon: <Storefront />, path: ROUTES.VENDOR },
      { label: "User", icon: <Person />, path: ROUTES.USER },
    ],
  },
  { label: "Payment", icon: <Payment />, path: ROUTES.PAYMENT },
  { label: "Order Detail", icon: <Receipt />, path: ROUTES.ORDER_DETAIL },
  { label: "User Group", icon: <ManageAccounts />, path: ROUTES.USER_GROUP },
];

const activeStyle = {
  backgroundColor: "#e91e8c",
  color: "#fff",
  borderRadius: "6px",
  "& .MuiListItemIcon-root": { color: "#fff" },
  "&:hover": { backgroundColor: "#c0176f" },
};

const defaultStyle = {
  color: "#cbd5e0",
  borderRadius: "6px",
  "& .MuiListItemIcon-root": { color: "#a0aec0" },
  "&:hover": { backgroundColor: "#3a4a5c" },
};

function NavItem({ item }) {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    <ListItemButton
      component={NavLink}
      to={item.path}
      sx={{
        ...(isActive ? activeStyle : defaultStyle),
        mx: 1,
        mb: 0.5,
        py: 0.8,
      }}
    >
      {item.icon && (
        <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
      )}
      <ListItemText
        primary={item.label}
        primaryTypographyProps={{
          fontSize: 14,
          fontWeight: isActive ? 700 : 400,
        }}
      />
    </ListItemButton>
  );
}

function NavGroup({ item }) {
  const location = useLocation();
  const isChildActive = item.children?.some(
    (c) => location.pathname === c.path,
  );
  const [open, setOpen] = useState(isChildActive || false);

  return (
    <>
      <ListItemButton
        onClick={() => setOpen((o) => !o)}
        sx={{
          ...defaultStyle,
          mx: 1,
          mb: 0.5,
          py: 0.8,
          ...(isChildActive && {
            color: "#e91e8c",
            "& .MuiListItemIcon-root": { color: "#e91e8c" },
          }),
        }}
      >
        <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
        <ListItemText
          primary={item.label}
          primaryTypographyProps={{ fontSize: 14 }}
        />
        {open ? (
          <ExpandLess fontSize="small" />
        ) : (
          <ExpandMore fontSize="small" />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding sx={{ pl: 1 }}>
          {item.children.map((child) => (
            <NavItem key={child.path} item={child} />
          ))}
        </List>
      </Collapse>
    </>
  );
}

export default function Sidebar({ mobileOpen, onClose }) {
  const content = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Brand */}
      <Box
        sx={{ px: 2, py: 2.5, display: "flex", alignItems: "center", gap: 1.5 }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            bgcolor: "#e91e8c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Logo </p>
        </Box>
        <Typography
          variant="subtitle1"
          fontWeight={700}
          color="#fff"
          fontSize={15}
        >
          VIP KDMVSTORE
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#3a4a5c", mx: 2 }} />

      <Divider sx={{ borderColor: "#3a4a5c", mx: 2, mb: 1 }} />

      {/* Nav */}
      <List sx={{ flex: 1, px: 0 }}>
        {navItems.map((item) =>
          item.children ? (
            <NavGroup key={item.label} item={item} />
          ) : (
            <NavItem key={item.label} item={item} />
          ),
        )}
      </List>

      {/* Logout */}
      <Divider sx={{ borderColor: "#3a4a5c", mx: 2 }} />
      <List>
        <ListItemButton sx={{ ...defaultStyle, mx: 1, my: 0.5, py: 0.8 }}>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Logout />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{ fontSize: 14 }}
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
      {/* Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: DRAWER_WIDTH },
        }}
      >
        {content}
      </Drawer>
      {/* Desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": { width: DRAWER_WIDTH },
        }}
        open
      >
        {content}
      </Drawer>
    </Box>
  );
}

export { DRAWER_WIDTH };
