import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./components/AuthPage.jsx";
import Products from "./components/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <AuthPage />,
  },
  {
    path: "/signup",
    // dynamically updated login page to register page
    element: <AuthPage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "*",
    element: <AuthPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
