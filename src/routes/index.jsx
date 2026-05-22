import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

import Payment from "../pages/Payment/Payment";
import Report from "../pages/Report/Report";
import Coupons from "../pages/Coupons/Coupons";
import Order from "../pages/Order/Order";
import Products from "../pages/Products/Products";
import Category from "../pages/Category/Category";
import Customers from "../pages/Customers/Customers";
import Inbox from "../pages/InboxPage/Inbox";
import KnowledgeBase from "../pages/KnowledgeBase/KnowledgeBase";
import ProductUpdates from "../pages/ProductUpdates/ProductUpdates";
import Setting from "../pages/Setting/Setting";
import Price from "../pages/Price/Price";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        path: "orders",
        element: <Order />,
      },

      {
        path: "products",
        element: <Products />,
      },

      {
        path: "category",
        element: <Category />,
      },

      {
        path: "customer",
        element: <Customers />,
      },

      {
        path: "reports",
        element: <Report />,
      },

      {
        path: "coupons",
        element: <Coupons />,
      },

      {
        path: "inbox",
        element: <Inbox />,
      },
      {
        path: "knowledge",
        element: <KnowledgeBase />,
      },

      {
        path: "updates",
        element: <ProductUpdates />,
      },

      {
        path: "setting",
        element: <Setting />,
      },

      {
        path: "price",
        element: <Price />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
