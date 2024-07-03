import React from "react";
import { Card } from "../../types/types";
import { Color } from "../../enums/enums";

interface PokerCardProps {
  card: Card;
  isFlipped: boolean;
  onFlip: () => void;
  className?: string;
}

const isJoker = (card: Card): boolean => {
  return card.color === "★" && card.mark === "Joker";
};

const PokerCard: React.FC<PokerCardProps> = ({
  card,
  isFlipped,
  onFlip,
  className,
}) => {
  return (
    <div
      className={`relative border rounded-lg w-16 h-24 md:w-20 md:h-28 flex flex-col justify-center items-center m-2 shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer ${
        isFlipped ? "bg-white" : "bg-gradient-to-r from-blue-400 to-purple-500"
      } ${className}`}
      onClick={onFlip}
    >
      {isFlipped ? (
        <>
          <div
            className={`${
              card.color === Color.Heart ||
              card.color === Color.Diamond ||
              isJoker(card)
                ? "text-red-500"
                : "text-black"
            } ${isJoker(card) ? "text-2xl" : "text-3xl"}`}
          >
            {card.color}
          </div>
          <div className="text-xl mt-2">{card.mark}</div>
        </>
      ) : (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-3xl text-white">🂠</div>
        </div>
      )}
    </div>
  );
};

export default PokerCard;
