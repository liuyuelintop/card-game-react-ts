import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-xl">Card Game</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/card-arena" className="text-white hover:text-gray-400">
            Card Arena
          </Link>
          <Link to="/poker-game" className="text-white hover:text-gray-400">
            Poker Game
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
