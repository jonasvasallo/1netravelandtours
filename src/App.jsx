import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./flex.css";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <br />
      <footer>
          Copyright © 2022 1NE Travel and Tours. All rights reserved.
      </footer>
    </>
  );
}

export default App;
