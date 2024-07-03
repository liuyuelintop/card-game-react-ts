import React from "react";
import { Mark } from "../../enums/enums";
import SelectControl from "../Controls/SelectControl";
import CheckboxControl from "../Controls/CheckboxControl";
import NumberInputControl from "../Controls/NumberInputControl";

interface DeckControlsProps {
  minMark: Mark;
  maxMark: Mark;
  includeJokers: boolean;
  playerCount: number;
  cardsPerPlayer: number;
  setMinMark: (value: Mark) => void;
  setMaxMark: (value: Mark) => void;
  setIncludeJokers: (value: boolean) => void;
  setPlayerCount: (value: number) => void;
  setCardsPerPlayer: (value: number) => void;
  handleFlipAll: () => void;
  handleDealCards: () => void;
}

const DeckControls: React.FC<DeckControlsProps> = ({
  minMark,
  maxMark,
  includeJokers,
  playerCount,
  cardsPerPlayer,
  setMinMark,
  setMaxMark,
  setIncludeJokers,
  setPlayerCount,
  setCardsPerPlayer,
  handleFlipAll,
  handleDealCards,
}) => {
  return (
    <div className="max-w-screen-md mx-auto p-4 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col space-y-4">
      <div className="flex flex-wrap justify-between gap-4 items-center">
        <SelectControl
          label="Min Mark"
          value={minMark}
          options={Object.values(Mark)}
          onChange={(value) => setMinMark(value as Mark)}
          className="w-24"
        />
        <SelectControl
          label="Max Mark"
          value={maxMark}
          options={Object.values(Mark)}
          onChange={(value) => setMaxMark(value as Mark)}
          className="w-24"
        />
        <CheckboxControl
          label="Include Jokers"
          checked={includeJokers}
          className="mt-4"
          onChange={setIncludeJokers}
        />
      </div>
      <div className="flex justify-between sm:justify-normal flex-wrap gap-4">
        <NumberInputControl
          label="Players Number"
          value={playerCount}
          min={1}
          onChange={setPlayerCount}
          className="w-40"
        />
        <NumberInputControl
          label="Cards Per Player"
          value={cardsPerPlayer}
          min={1}
          onChange={setCardsPerPlayer}
          className="w-40"
        />
      </div>
      <div className="flex justify-center sm:justify-normal space-x-4">
        <button
          onClick={handleDealCards}
          className="w-40 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition text-sm"
        >
          Deal Cards
        </button>
        <button
          onClick={handleFlipAll}
          className="w-40 px-3 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-700 transition text-sm"
        >
          Flip All
        </button>
      </div>
    </div>
  );
};

export default DeckControls;
