import { shuffle } from "./shuffle";

export const getRandomArrayItem = (emptyCellsIndexes: number[]): number => {
  const randomIndex = Math.floor(
    Math.random() * (emptyCellsIndexes.length - 1)
  );
  return shuffle(emptyCellsIndexes)[randomIndex];
};
