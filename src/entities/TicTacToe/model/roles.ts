import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createBaseSelector } from "../../../shared/lib/redux";
import { createSelector } from "reselect";

export enum ERoles {
  cross = "cross",
  zero = "zero",
}

interface IRolesState {
  userRole: ERoles;
  computerRole: ERoles;
  activeRole: ERoles;
}

const initialState: IRolesState = {
  userRole: ERoles.cross,
  computerRole: ERoles.zero,
  activeRole: ERoles.cross,
};

const reducerPath = "roles";

const rolesState = createSlice({
  name: reducerPath,
  initialState,
  reducers: {
    setUserRole: (state, action: PayloadAction<ERoles>) => {
      state.userRole = action.payload;
      state.computerRole =
        action.payload === ERoles.cross ? ERoles.zero : ERoles.cross;
    },
    setActiveRole: (state, action: PayloadAction<ERoles>) => {
      state.activeRole = action.payload;
    },
    toggleActiveRole: (state) => {
      state.activeRole === ERoles.cross
        ? (state.activeRole = ERoles.zero)
        : (state.activeRole = ERoles.cross);
    },
    resetActiveRole: (state) => {
      state.activeRole = ERoles.cross;
    },
  },
});

const baseSelector = createBaseSelector<IRolesState>(reducerPath);
const getUserRole = createSelector(baseSelector, (state) => state.userRole);
const getActiveRole = createSelector(baseSelector, (state) => state.activeRole);
const getComputerRole = createSelector(
  baseSelector,
  (state) => state.computerRole
);

// Public API
export const selectors = {
  getActiveRole,
  getUserRole,
  getComputerRole,
};

export const actions = {
  ...rolesState.actions,
};

export const reducers = {
  [reducerPath]: rolesState.reducer,
};
