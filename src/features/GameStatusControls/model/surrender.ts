import { ThunkActionType } from "shared/lib/redux/ThunkActionType";
import { ticTacToeModel } from "entities/TicTacToe";

export const surrender = (): ThunkActionType => {
  return (dispatch, getState) => {
    const computerRole = ticTacToeModel.roles.selectors.getComputerRole(
      getState()
    );
    dispatch(ticTacToeModel.gameStatus.actions.endGame(computerRole));
  };
};
