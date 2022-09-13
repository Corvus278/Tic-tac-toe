import { configureStore } from "@reduxjs/toolkit";
import { ticTacToeModel } from "entities/TicTacToe";

export const store = configureStore({
  reducer: {
    ...ticTacToeModel.cells.reducers,
    ...ticTacToeModel.roles.reducers,
    ...ticTacToeModel.history.reducers,
    ...ticTacToeModel.gameStatus.reducers,
  },
});

export type AppDispatch = typeof store.dispatch;
