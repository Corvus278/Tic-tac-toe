import { FC } from "react";
import { ticTacToeModel } from "entities/TicTacToe";
import { useAppSelector } from "../../../shared/lib/redux";
import { gameEvent } from "../model/gameEvent";
import { useAppDispatch } from "../../../shared/lib/redux/useAppDispatch";

export const GameEvents: FC = () => {
  const dispatch = useAppDispatch();
  const { winner } = useAppSelector(
    ticTacToeModel.gameStatus.selectors.gameStatus
  );
  if (dispatch(gameEvent(winner)) === null) return <></>;

  return <></>;
};
