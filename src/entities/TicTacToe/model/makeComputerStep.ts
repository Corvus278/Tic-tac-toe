import { ThunkActionType } from "shared/lib/redux/ThunkActionType";
import { getComputerStep } from "../lib/getComputerStep";
import * as cells from "./cells";
import * as roles from "./roles";
import { makeStep } from "./makeStep";

export const makeComputerStep = (): ThunkActionType => {
  return (dispatch, getState) => {
    const computerStep = getComputerStep(cells.selectors.getCells(getState()));
    dispatch(
      makeStep({
        cellIndex: computerStep,
        newOwner: roles.selectors.getComputerRole(getState()),
      })
    );
  };
};
