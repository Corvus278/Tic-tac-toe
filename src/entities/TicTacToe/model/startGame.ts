import { ThunkActionType } from "shared/lib/redux/ThunkActionType";
import { resetAllGameState } from "./resetAllGameState";
import * as roles from "./roles";
import * as gameStatus from "./gameStatus";
import { makeComputerStep } from "./makeComputerStep";

export const startGame = (): ThunkActionType => {
  return (dispatch, getState) => {
    dispatch(resetAllGameState());
    dispatch(gameStatus.actions.startGame());
    const activeRole = roles.selectors.getActiveRole(getState());
    const computerRole = roles.selectors.getComputerRole(getState());

    if (computerRole === activeRole) {
      dispatch(makeComputerStep());
    }
  };
};
