import { ICell } from "../model/cells";

export const checkPossiblesStep = (cells: ICell[]): boolean => {
  for (const cell of cells) {
    if (cell.owner === null) {
      return true;
    }
  }

  return false;
};
