import { getRandomArrayItem } from "../../../shared/lib/getRandomArrayItem";

enum ERoles {
  cross = "cross",
  zero = "zero",
}

interface ICell {
  owner: null | ERoles;
}

const winnerCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const getComputerStep = (
  cells: ICell[],
  userRole: ERoles,
  computerRole: ERoles
): number => {
  // If center's cell is empty - fill it
  const ownerIsNull = (indexCell: number) => cells[indexCell].owner === null;

  if (!cells[4].owner) return 4;

  // Check computer prev-winner combinations
  for (const comb of winnerCombinations) {
    const step = checkPrevwinnerComb(cells, comb, computerRole);
    debugger;
    if (step !== null) return step;
  }

  // Check user prev-winner combinations
  for (const comb of winnerCombinations) {
    const step = checkPrevwinnerComb(cells, comb, userRole);
    debugger;
    if (step !== null) return step;
  }

  // Check user cells with potential to win
  winnerCombinations.forEach((comb) => {
    if (
      cells[comb[0]].owner === userRole &&
      ownerIsNull(comb[1]) &&
      ownerIsNull(comb[2])
    ) {
      return comb[2];
    } else if (
      cells[comb[1]].owner === userRole &&
      ownerIsNull(comb[0]) &&
      ownerIsNull(comb[2])
    ) {
      return comb[0];
    } else if (
      cells[comb[2]].owner === userRole &&
      ownerIsNull(comb[0]) &&
      ownerIsNull(comb[1])
    ) {
      return comb[1];
    }
  });

  // Else
  const emptyIndexes = [];
  for (const cellIndex in cells) {
    if (!cells[cellIndex].owner) emptyIndexes.push(parseInt(cellIndex));
  }

  return getRandomArrayItem(emptyIndexes);
};

function checkPrevwinnerComb(cells: ICell[], comb: number[], role: ERoles) {
  if (
    cells[comb[0]].owner === cells[comb[1]].owner &&
    cells[comb[2]].owner === null &&
    cells[comb[0]].owner === role
  ) {
    // debugger;
    return comb[2];
  } else if (
    cells[comb[1]].owner === cells[comb[2]].owner &&
    cells[comb[0]].owner === null &&
    cells[comb[1]].owner === role
  ) {
    return comb[0];
  } else if (
    cells[comb[0]].owner === cells[comb[2]].owner &&
    cells[comb[1]].owner === null &&
    cells[comb[0]].owner === role
  ) {
    return comb[1];
  }

  return null;
}
