import { useCallback } from "react";
import { useAppDispatch } from "./useAppDispatch";

export const useAction = <A extends any[]>(
  actionCreator: (...args: A) => any
) => {
  const dispatch = useAppDispatch();
  return useCallback(
    (...args: A) => dispatch(actionCreator.apply(null, args)),
    [dispatch, actionCreator]
  );
};
