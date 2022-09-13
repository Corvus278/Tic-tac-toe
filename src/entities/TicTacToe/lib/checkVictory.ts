import { ICell } from "../model/cells";
import { ERoles } from "../model/roles";

export const checkVictory = (
  cells: ICell[]
): { isVictory: boolean; winner: ERoles | null } => {
  let isVictory = false;
  let winner: ERoles | null = null;

  const checkSequenceCell = (index1: number, index2: number, index3: number) =>
    cells[index1].owner === cells[index2].owner &&
    cells[index2].owner === cells[index3].owner &&
    cells[index1].owner !== null;

  const setVictoryData = (index: number) => {
    isVictory = true;
    winner = cells[index].owner;
  };

  // Rows
  if (checkSequenceCell(0, 1, 2)) setVictoryData(0);

  if (checkSequenceCell(3, 4, 5)) setVictoryData(3);

  if (checkSequenceCell(6, 7, 8)) setVictoryData(6);

  // Columns
  if (checkSequenceCell(0, 3, 6)) setVictoryData(0);

  if (checkSequenceCell(1, 4, 7)) setVictoryData(1);

  if (checkSequenceCell(2, 5, 8)) setVictoryData(2);

  //	Diagonals
  if (checkSequenceCell(0, 4, 8)) setVictoryData(0);
  if (checkSequenceCell(2, 4, 6)) setVictoryData(2);

  return {
    isVictory,
    winner,
  };
};
