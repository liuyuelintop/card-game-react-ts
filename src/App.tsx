import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { DeckProvider } from './contexts/CardDeckContext';
import Home from "./pages/Home";
// import CardArena from './pages/CardArena';
import PokerGame from "./pages/PokerGame";
import NavBar from "./components/Navbar";
// import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    // <DeckProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/card-arena" element={<CardArena />} /> */}
        <Route path="/poker-game" element={<PokerGame />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
    // </DeckProvider>
  );
};

export default App;
