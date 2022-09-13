import { ICell } from "./cells";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createBaseSelector } from "../../../shared/lib/redux";
import { createSelector } from "reselect";

export interface IHistory {
  history: ICell[][];
}

const initialState: IHistory = {
  history: [],
};

const reducerPath = "history";

const slice = createSlice({
  name: reducerPath,
  initialState,
  reducers: {
    addStep: (state, action: PayloadAction<ICell[]>) => {
      state.history.push(action.payload);
    },
    removeLastStep: (state) => {
      state.history.pop();
    },
    resetHistory: () => {
      return { ...initialState };
    },
  },
});

const baseSelector = createBaseSelector<IHistory>(reducerPath);
const getHistory = createSelector(baseSelector, (state) => state.history);
const getLastUserStep = createSelector(
  baseSelector,
  (state) => state.history[state.history.length - 1]
);

// Public API
export const selectors = {
  getHistory,
  getLastUserStep,
};

export const actions = {
  ...slice.actions,
};

export const reducers = {
  [reducerPath]: slice.reducer,
};
