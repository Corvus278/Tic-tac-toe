import { FC } from "react";
import { Button } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
import { resetToLastUserStep } from "../model/history";
import { useAppDispatch } from "../../../shared/lib/redux/useAppDispatch";
import { useAppSelector } from "../../../shared/lib/redux";
import { ticTacToeModel } from "entities/TicTacToe";

export const BackStepBtn: FC = () => {
  const dispatch = useAppDispatch();
  const { gameIsStart } = useAppSelector(
    ticTacToeModel.gameStatus.selectors.gameStatus
  );
  const history = useAppSelector(ticTacToeModel.history.selectors.getHistory);

  return (
    <Button
      icon={<RollbackOutlined />}
      onClick={() => dispatch(resetToLastUserStep())}
      disabled={!gameIsStart || history.length === 0}
    ></Button>
  );
};
