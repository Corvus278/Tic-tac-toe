import { Action, AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { TRootState } from "./rootState";

export type ThunkActionType<
  State = TRootState,
  A extends Action = AnyAction
> = ThunkAction<void, State, unknown, A>;
