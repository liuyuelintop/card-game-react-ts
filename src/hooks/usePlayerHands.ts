import { useEffect, useState } from "react";
import { Card, Player } from "../types/types";
import { dealCards } from "../utils/dealCards";
import { createDeck } from "../utils/createDeck";
import { shuffleDeck } from "../utils/shuffleDeck";

/**
 * 自定义 Hook，用于管理玩家手牌
 * @param playerCount - 玩家数量
 * @param cardsPerPlayer - 每个玩家分配的牌数
 * @param includeJokers - 是否包含大小王
 * @returns 包含玩家、玩家翻牌状态、处理发牌、处理单个玩家翻牌、处理所有玩家翻牌的函数
 */
const usePlayerHands = (
  playerCount: number,
  cardsPerPlayer: number,
  includeJokers?: boolean
) => {
  const [deck, setDeck] = useState<Card[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [playerFlips, setPlayerFlips] = useState<boolean[][]>([]);

  // 初始化牌堆并洗牌
  const initializeDeck = () => {
    const newDeck = createDeck({ includeJokers });
    const shuffledDeck = shuffleDeck(newDeck);
    setDeck(shuffledDeck);
  };

  // 发牌函数
  const handleDealCards = () => {
    const dealtPlayers = dealCards(deck, playerCount, cardsPerPlayer);
    setPlayers(dealtPlayers);
    setPlayerFlips(
      dealtPlayers.map((player) => new Array(player.hand.length).fill(false))
    );
  };

  // 翻转单个玩家的单张牌
  const handlePlayerFlip = (playerIndex: number, cardIndex: number) => {
    setPlayerFlips((prevPlayerFlips) => {
      const newPlayerFlips = [...prevPlayerFlips];
      newPlayerFlips[playerIndex] = [...newPlayerFlips[playerIndex]];
      newPlayerFlips[playerIndex][cardIndex] =
        !newPlayerFlips[playerIndex][cardIndex];
      return newPlayerFlips;
    });
  };

  // 翻转所有玩家的所有牌
  const handleFlipAllPlayers = () => {
    const allFlipped = playerFlips.every((playerFlip) =>
      playerFlip.every((state) => state)
    );
    setPlayerFlips(
      playerFlips.map((playerFlip) => playerFlip.map(() => !allFlipped))
    );
  };

  // 初始化牌堆
  useEffect(() => {
    initializeDeck();
  }, [includeJokers]);

  return {
    players,
    playerFlips,
    handleDealCards,
    handlePlayerFlip,
    handleFlipAllPlayers,
  };
};

export { usePlayerHands };
