import { FC } from "react";
import classNames from "classnames";
import styles from "./circle.module.scss";

interface ICircle {
  className?: string;
}

export const Circle: FC<ICircle> = ({ className }) => {
  return <div className={classNames(styles.circle, className)}></div>;
};
