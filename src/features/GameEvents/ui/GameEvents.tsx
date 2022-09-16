import { FC, useEffect } from "react";
import { ticTacToeModel } from "entities/TicTacToe";
import { useAppSelector } from "../../../shared/lib/redux";
import { gameEvent } from "../model/gameEvent";
import { useAppDispatch } from "../../../shared/lib/redux/useAppDispatch";

export const GameEvents: FC = () => {
  const dispatch = useAppDispatch();
  const { winner } = useAppSelector(
    ticTacToeModel.gameStatus.selectors.gameStatus
  );
  useEffect(() => {
    dispatch(gameEvent(winner));
  }, [winner, dispatch]);

  return <></>;
};
