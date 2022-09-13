import { ThunkActionType } from "shared/lib/redux/ThunkActionType";
import { ticTacToeModel } from "entities/TicTacToe";

export const resetToLastUserStep = (): ThunkActionType => {
  return (dispatch, getState) => {
    const userRole = ticTacToeModel.roles.selectors.getUserRole(getState());
    const gameStatus = ticTacToeModel.gameStatus.selectors.gameStatus(
      getState()
    );
    const lastUserUserStep = ticTacToeModel.history.selectors.getLastUserStep(
      getState()
    );
    // If history is empty, exit
    if (
      !lastUserUserStep ||
      lastUserUserStep.length === 0 ||
      !gameStatus.gameIsStart
    ) {
      return;
    }

    dispatch(ticTacToeModel.cells.actions.setCells(lastUserUserStep));
    dispatch(ticTacToeModel.roles.actions.setActiveRole(userRole));
    dispatch(ticTacToeModel.history.actions.removeLastStep());
  };
};
