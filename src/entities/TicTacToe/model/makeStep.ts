import { checkVictory } from "../lib/checkVictory";
import { ThunkActionType } from "../../../shared/lib/redux/ThunkActionType";
import { checkPossiblesStep } from "../lib/checkPossiblesStep";
import * as cellsModel from "./cells";
import * as roles from "./roles";
import * as history from "./history";
import { makeComputerStep } from "./makeComputerStep";
import * as gameStatus from "./gameStatus";

interface IMakeStepArgs {
  cellIndex: number;
  newOwner: roles.ERoles;
}

export const makeStep = ({
  cellIndex,
  newOwner,
}: IMakeStepArgs): ThunkActionType => {
  return (dispatch, getState) => {
    // Write prev state to history
    if (
      roles.selectors.getUserRole(getState()) ===
      roles.selectors.getActiveRole(getState())
    ) {
      dispatch(
        history.actions.addStep(cellsModel.selectors.getCells(getState()))
      );
    }

    // Make step
    dispatch(cellsModel.actions.updateOwner({ cell: cellIndex, newOwner }));

    const cells = cellsModel.selectors.getCells(getState());
    const victory = checkVictory(cells);
    if (victory.isVictory) {
      dispatch(gameStatus.actions.endGame(victory.winner));
    } else {
      if (!checkPossiblesStep(cells)) {
        dispatch(gameStatus.actions.endGame("draw"));
      } else {
        dispatch(roles.actions.toggleActiveRole());
        if (
          roles.selectors.getActiveRole(getState()) ===
          roles.selectors.getComputerRole(getState())
        ) {
          dispatch(makeComputerStep());
        }
      }
    }
  };
};
