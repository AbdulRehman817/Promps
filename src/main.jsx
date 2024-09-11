import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Components/navbar.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import SingleProduct from "./pages/singleProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "singleproduct/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
