import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Card Game</h1>
      <div className="space-x-4">
        <Link
          to="/poker-game"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition"
        >
          Go to Poker Game
        </Link>
      </div>
    </div>
  );
};

export default Home;
