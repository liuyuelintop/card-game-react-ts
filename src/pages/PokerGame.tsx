import React, { useState } from "react";
import PokerCard from "../components/PokerCard/PokerCard";
import { usePlayerHands } from "../hooks/usePlayerHands";
import DeckControls from "../components/Controls/DeckControls";
import { Mark } from "../enums/enums";

const PokerGame: React.FC = () => {
  const [minMark, setMinMark] = useState<Mark>(Mark.Ace);
  const [maxMark, setMaxMark] = useState<Mark>(Mark.King);
  const [includeJokers, setIncludeJokers] = useState<boolean>(false);
  const [playerCount, setPlayerCount] = useState<number>(4);
  const [cardsPerPlayer, setCardsPerPlayer] = useState<number>(5);

  const {
    players,
    playerFlips,
    handleDealCards,
    handlePlayerFlip,
    handleFlipAllPlayers,
  } = usePlayerHands(playerCount, cardsPerPlayer, includeJokers);

  return (
    <div className="mx-auto items-center flex flex-col flex-wrap p-4">
      <h1 className="text-2xl lg:text-4xl mb-4 text-center">Poker Game</h1>
      <DeckControls
        minMark={minMark}
        maxMark={maxMark}
        playerCount={playerCount}
        cardsPerPlayer={cardsPerPlayer}
        includeJokers={includeJokers}
        setMinMark={setMinMark}
        setMaxMark={setMaxMark}
        setIncludeJokers={setIncludeJokers}
        setPlayerCount={setPlayerCount}
        setCardsPerPlayer={setCardsPerPlayer}
        handleDealCards={handleDealCards}
        handleFlipAll={handleFlipAllPlayers}
      />
      <div className="flex flex-wrap justify-center mt-4 w-full">
        {players.map((player, playerIndex) => (
          <div
            key={player.id}
            className="m-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            <h2 className="text-xl mb-2 text-center">{player.name}</h2>
            <div className="flex flex-wrap justify-center">
              {player.hand.map((card, cardIndex) => (
                <PokerCard
                  key={`${player.id}-${cardIndex}`}
                  card={card}
                  isFlipped={playerFlips[playerIndex][cardIndex]}
                  onFlip={() => handlePlayerFlip(playerIndex, cardIndex)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokerGame;
