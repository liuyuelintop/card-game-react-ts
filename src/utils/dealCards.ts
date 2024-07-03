import { Deck, Player } from "../types/types";
import { shuffleDeck } from "./shuffleDeck";

/**
 * 发牌函数，将牌堆分配给玩家
 * @param deck - 需要分配的牌堆
 * @param playerCount - 玩家数量
 * @param cardsPerPlayer - 每个玩家分配的牌数
 * @returns 返回包含玩家和他们手牌的数组
 */
export const dealCards = (
  deck: Deck,
  playerCount: number,
  cardsPerPlayer: number
): Player[] => {
  const players: Player[] = Array.from({ length: playerCount }, (_, i) => ({
    id: i + 1,
    name: `Player ${i + 1}`,
    hand: [],
  }));

  // 确保牌堆已经洗牌
  const shuffledDeck = shuffleDeck(deck);

  players.forEach((player) => {
    player.hand = shuffledDeck.splice(0, cardsPerPlayer);
  });

  return players;
};
