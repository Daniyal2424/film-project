import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/UI/Header/Header";
import "./index.css";
import Main from "./Components/Pages/Main/Main";
import Kino from "./Components/Pages/Kino/Kino";
import Concerts from "./Components/Pages/Concerts/Concerts";
import Theater from "./Components/Pages/Theater/Theater";
import Navbar from "./Components/UI/Navbar/Navbar";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/kino" element={<Kino />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/theater" element={<Theater />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
