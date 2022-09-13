import { FC } from "react";
import { useAppSelector } from "shared/lib/redux";
import { ticTacToeModel } from "entities/TicTacToe";
import { StartBtn } from "../../../shared/ui/StartBtn";
import { useAppDispatch } from "../../../shared/lib/redux/useAppDispatch";

export const StartGameBtn: FC = () => {
  const dispatch = useAppDispatch();
  const { gameIsStart } = useAppSelector(
    ticTacToeModel.gameStatus.selectors.gameStatus
  );

  return (
    <StartBtn
      disabled={gameIsStart}
      onClick={() => dispatch(ticTacToeModel.startGame.startGame())}
    ></StartBtn>
  );
};
