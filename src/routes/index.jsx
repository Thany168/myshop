// src/routes/index.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";

import MainLayout from "../layouts/MainLayout";
import { ROUTES } from "../constants/routes";

// ─── Direct imports ────────────────────────────────────────────────────────
import Dashboard from "../pages/Dashboard";
import ClientForm from "../pages/Management/ClientForm";
import Service from "../pages/Management/Service";
import Order from "../pages/Management/Order";
// import Vendor from "../pages/Management/Vendor";
// import User from "../pages/Management/User";
import Payment from "../pages/Payment";
// import OrderDetail from "../pages/OrderDetail";
// import UserGroup from "../pages/UserGroup";

// ─── Router ────────────────────────────────────────────────────────────────
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: ROUTES.CLIENT_FORM.slice(1), element: <ClientForm /> },
      { path: ROUTES.SERVICE.slice(1), element: <Service /> },
      { path: ROUTES.ORDER.slice(1), element: <Order /> },
      //   { path: ROUTES.VENDOR.slice(1), element: <Vendor /> },
      //   { path: ROUTES.USER.slice(1), element: <User /> },
      { path: ROUTES.PAYMENT.slice(1), element: <Payment /> },
      //   { path: ROUTES.ORDER_DETAIL.slice(1), element: <OrderDetail /> },
      //   { path: ROUTES.USER_GROUP.slice(1), element: <UserGroup /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
