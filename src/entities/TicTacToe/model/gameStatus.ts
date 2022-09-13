import { ERoles } from "./roles";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createBaseSelector } from "../../../shared/lib/redux";
import { createSelector } from "reselect";

export interface IGameStatus {
  gameIsStart: boolean;
  winner: WinnerType;
}

export type WinnerType = null | ERoles | "draw";

const initialState: IGameStatus = {
  gameIsStart: false,
  winner: null,
};

const reducerPath = "gameStatus";

const slice = createSlice({
  name: reducerPath,
  initialState,
  reducers: {
    startGame: (state) => {
      state.gameIsStart = true;
    },
    endGame: (state, action: PayloadAction<WinnerType>) => {
      state.gameIsStart = false;
      state.winner = action.payload;
    },
    resetGameStatus: () => {
      return { ...initialState };
    },
  },
});

const baseSelector = createBaseSelector<IGameStatus>(reducerPath);
const gameStatus = createSelector(baseSelector, (state) => state);

// Public API
export const selectors = {
  gameStatus,
};

export const actions = {
  ...slice.actions,
};

export const reducers = {
  [reducerPath]: slice.reducer,
};
