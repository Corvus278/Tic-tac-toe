import { TRootState } from "./rootState";

export const createBaseSelector = <T>(rootKey: string) => {
  return (state: TRootState) => {
    if (rootKey in state) {
      return state[rootKey] as T;
    } else {
      throw new Error(`Reducer ${rootKey} in not registered`);
    }
  };
};
