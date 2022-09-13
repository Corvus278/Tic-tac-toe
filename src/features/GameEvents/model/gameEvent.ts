import { ThunkActionType } from "shared/lib/redux/ThunkActionType";
import { ticTacToeModel } from "entities/TicTacToe";
import { message } from "antd";

export const gameEvent = (
  winner: ticTacToeModel.gameStatus.WinnerType
): ThunkActionType => {
  return (dispatch, getState) => {
    if (winner === null) return null;

    const userRole = ticTacToeModel.roles.selectors.getUserRole(getState());
    const messageDuration: number = 5;

    if (userRole === winner) {
      message.success("Победа! :)", messageDuration);
    } else if (winner === "draw") {
      message.warning("Ничья!", messageDuration);
    } else {
      message.error("Поражение! :(", messageDuration);
    }
  };
};
