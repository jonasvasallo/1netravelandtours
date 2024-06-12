import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./flex.css";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import TourPackagesPage from "./pages/Packages/TourPackagesPage";
import TourPackageDetails from "./pages/Packages/TourPackageDetails";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tour-packages">
          <Route index element={<TourPackagesPage/>}/>
          <Route path=":id" element={<TourPackageDetails/>}/>
        </Route>
        <Route path="/contact-us" element={<ContactPage />}/>
      </Routes>
      <br />
      <footer>
          Copyright © 2022 1NE Travel and Tours. All rights reserved.
      </footer>
    </>
  );
}

export default App;
