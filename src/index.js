import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Components imports
import CreateBook from "./components/forlater/CreateBook";
import ShowBookList from "./components/forlater/ShowBookList";
import ShowBookDetails from "./components/forlater/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";

//House component imports
import Home from "./components/Home";
import Login from "./components/Login";
import ShowHouseDetails from "./components/ShowHouseDetails";
import ShowHouseList from "./components/ShowHouseList";
import Services from "./components/Services";
import SignUp from "./components/SignUp";
import ShowHomeList from "./components/ShowHomeList";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Admin from "./components/Admin";
import Rent from "./components/AdminUse/Rent";

// Routes
const router = createBrowserRouter([
  { path: "/", element: <ShowBookList /> },
  { path: "/create-book", element: <CreateBook /> },
  { path: "/show-book/:id", element: <ShowBookDetails /> },
  { path: "/edit-book/:id", element: <UpdateBookInfo /> },
]);

//Routes
const houseRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/show-house-list", element: <ShowHouseList /> },
  { path: "/show-home-list", element: <ShowHomeList /> },
  { path: "/show-house/:id", element: <ShowHouseDetails /> },
  { path: "/services", element: <Services /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/admin-page", element: <Admin /> },
  { path: "/rent", element: <Rent /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={houseRouter} />
  </React.StrictMode>
);
