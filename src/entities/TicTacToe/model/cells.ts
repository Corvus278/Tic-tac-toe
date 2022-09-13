import { ERoles } from "./roles";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createBaseSelector } from "../../../shared/lib/redux";
import { createSelector } from "reselect";

export interface ICell {
  owner: null | ERoles;
}

interface ICellsState {
  cells: ICell[];
}

const initialState: ICellsState = {
  cells: Array(9).fill({
    owner: null,
  }),
};

const reducerPath = "cells";

const cellsSlice = createSlice({
  name: reducerPath,
  initialState,
  reducers: {
    updateOwner: (
      state,
      action: PayloadAction<{
        cell: number;
        newOwner: ERoles;
      }>
    ) => {
      state.cells[action.payload.cell].owner = action.payload.newOwner;
    },
    resetCells: () => {
      return { ...initialState };
    },
    resetLastCell: (state) => {
      state.cells[state.cells.length - 1] = initialState.cells[0];
    },
    setCells: (state, action: PayloadAction<ICell[]>) => {
      state.cells = action.payload;
    },
  },
});

// Public API
const baseSelector = createBaseSelector<ICellsState>(reducerPath);
const getCells = createSelector(baseSelector, (state) => state.cells);
export const selectors = {
  getCells,
};

export const actions = {
  ...cellsSlice.actions,
};

export const reducers = {
  [reducerPath]: cellsSlice.reducer,
};
