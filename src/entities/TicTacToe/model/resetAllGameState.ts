import { ThunkActionType } from "shared/lib/redux/ThunkActionType";
import * as cells from "./cells";
import * as roles from "./roles";
import * as history from "./history";
import * as gameStatus from "./gameStatus";

export const resetAllGameState = (): ThunkActionType => {
  return (dispatch) => {
    dispatch(cells.actions.resetCells());
    dispatch(roles.actions.resetActiveRole());
    dispatch(history.actions.resetHistory());
    dispatch(gameStatus.actions.resetGameStatus());
  };
};
