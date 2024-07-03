import { Deck, Card } from "../types/types";
import { Mark, Color } from "../enums/enums";

interface CreateDeckOptions {
  includeJokers?: boolean;
}

/**
 * 创建一副扑克牌
 * @param options - 配置选项，如是否包含大小王
 * @returns 返回生成的牌堆
 */
export const createDeck = (options: CreateDeckOptions = {}): Deck => {
  const { includeJokers = false } = options;
  const deck: Deck = [];
  const marks = Object.values(Mark);
  const colors = Object.values(Color);

  for (const mark of marks) {
    for (const color of colors) {
      deck.push({ color, mark } as Card);
    }
  }

  if (includeJokers) {
    deck.push({ color: "★", mark: "joker" });
    deck.push({ color: "★", mark: "Joker" });
  }

  return deck;
};
