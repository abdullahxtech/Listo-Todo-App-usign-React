import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter,Route,RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="bg-gray-200 min-h-screen"><Navbar/><Home/><Footer/></div>
    },
    {
      path: "/about",
      element: <div className="bg-gray-200 min-h-screen"><Navbar/><About/><Footer/></div>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
