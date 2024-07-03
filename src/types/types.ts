import { Color, Mark } from "../enums/enums";

export type Card = NormalCard | Joker;

export type NormalCard = {
  color: Color;
  mark: Mark;
};

export type Joker = {
  color: "★";
  mark: "joker" | "Joker";
};

export type Deck = Card[];

export type Player = {
  id: number;
  name: string;
  hand: Card[];
};
