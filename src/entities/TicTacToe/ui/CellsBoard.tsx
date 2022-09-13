import { FC } from "react";
import { CloseOutlined } from "@ant-design/icons";
import styles from "./cellsBoard.module.scss";
import { ERoles } from "../model/roles";
import { Circle } from "../../../shared/ui/Circle";
import { useAppSelector } from "../../../shared/lib/redux";
import { ticTacToeModel } from "entities/TicTacToe";
import { makeStep } from "../model/makeStep";
import { useAppDispatch } from "../../../shared/lib/redux/useAppDispatch";
import classNames from "classnames";

export const CellsBoard: FC = () => {
  const dispatch = useAppDispatch();
  const { gameIsStart } = useAppSelector(
    ticTacToeModel.gameStatus.selectors.gameStatus
  );
  const cells = useAppSelector(ticTacToeModel.cells.selectors.getCells);
  const activeRole = useAppSelector(
    ticTacToeModel.roles.selectors.getActiveRole
  );

  return (
    <div
      className={classNames(styles.cellsBoard, {
        [styles.disabled]: !gameIsStart,
      })}
    >
      {cells.map((cell, index) => (
        <button
          className={styles.cell}
          key={index}
          disabled={cell.owner !== null || !gameIsStart}
          onClick={() =>
            dispatch(makeStep({ cellIndex: index, newOwner: activeRole }))
          }
        >
          {cell.owner === ERoles.cross && (
            <CloseOutlined className={styles.cellCross} />
          )}
          {cell.owner === ERoles.zero && (
            <Circle className={styles.icon}></Circle>
          )}
        </button>
      ))}
    </div>
  );
};
