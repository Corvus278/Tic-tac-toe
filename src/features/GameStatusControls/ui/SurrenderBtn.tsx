import { FC } from "react";
import { Button } from "antd";
import { ticTacToeModel } from "entities/TicTacToe";
import { useAppSelector } from "../../../shared/lib/redux";
import { useAppDispatch } from "../../../shared/lib/redux/useAppDispatch";
import { surrender } from "../model/surrender";

interface ISurrenderBtn {
  disabled?: boolean;
}

export const SurrenderBtn: FC<ISurrenderBtn> = () => {
  const { gameIsStart } = useAppSelector(
    ticTacToeModel.gameStatus.selectors.gameStatus
  );
  const dispatch = useAppDispatch();

  return (
    <Button disabled={!gameIsStart} onClick={() => dispatch(surrender())}>
      Сдаться
    </Button>
  );
};
