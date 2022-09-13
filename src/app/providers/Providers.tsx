import { FC, PropsWithChildren, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
