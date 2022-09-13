// eslint-disable-next-line no-restricted-imports
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TRootState } from "./rootState";

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
