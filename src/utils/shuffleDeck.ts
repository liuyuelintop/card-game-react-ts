import { Deck } from "../types/types";

/**
 * 洗牌函数，使用 Fisher-Yates 洗牌算法
 * @param deck - 需要洗的牌堆
 * @returns 返回洗好的牌堆
 */
export const shuffleDeck = (deck: Deck): Deck => {
  const shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
};
