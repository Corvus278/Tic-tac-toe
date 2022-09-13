import { FC } from "react";
import { CellsBoard } from "entities/TicTacToe";
import styles from "./gameBoard.module.scss";
import { BackStepBtn } from "features/History/ui/BackStepBtn";

export const GameBoard: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <BackStepBtn />
      </div>
      <CellsBoard></CellsBoard>
    </div>
  );
};
