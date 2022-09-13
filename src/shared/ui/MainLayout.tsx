import { FC, PropsWithChildren } from "react";
import styles from "./mainLayout.module.scss";
import classNames from "classnames";

interface IMainLayout {
  className?: string;
}

export const MainLayout: FC<PropsWithChildren<IMainLayout>> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames(styles.mainLayout, className)}>{children}</div>
  );
};
