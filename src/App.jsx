import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./flex.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
