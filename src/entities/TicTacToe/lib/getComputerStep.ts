import { ICell } from "../model/cells";
import { getRandomArrayItem } from "../../../shared/lib/getRandomArrayItem";

export const getComputerStep = (cells: ICell[]) => {
  const emptyIndexes = [];
  for (const cellIndex in cells) {
    if (!cells[cellIndex].owner) emptyIndexes.push(parseInt(cellIndex));
  }
  return getRandomArrayItem(emptyIndexes);
};
