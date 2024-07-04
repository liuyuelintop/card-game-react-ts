import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PokerGame from "./pages/PokerGame";
import NavBar from "./components/Navbar/Navbar";
import NotFound from "./pages/NotFound";
import "./components/Navbar/Navbar.css";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poker-game" element={<PokerGame />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
