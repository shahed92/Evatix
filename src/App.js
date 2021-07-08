import React, { useState } from "react";
import "./app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Package from "./components/Package";
function App() {
  return (
    <>
      <Navbar />
      <hr style={{ borderTopColor: "#d5c2c2", borderTopWidth: "0.01rem" }} />
      <Header />
      <Package />
      <Footer />
    </>
  );
}

export default App;
