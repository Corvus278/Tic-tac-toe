import { Select } from "antd";
import { FC } from "react";
import { useAction, useAppSelector } from "shared/lib/redux";
import { ticTacToeModel } from "entities/TicTacToe";

const { Option } = Select;

interface ISelectRole {
  onChange?: () => void;
  disabled?: boolean;
}

export const SelectRole: FC<ISelectRole> = ({ onChange, disabled }) => {
  const userRole = useAppSelector(ticTacToeModel.roles.selectors.getUserRole);
  const { gameIsStart } = useAppSelector(
    ticTacToeModel.gameStatus.selectors.gameStatus
  );
  const setUserRole = useAction(ticTacToeModel.roles.actions.setUserRole);

  return (
    <Select
      defaultValue={userRole}
      disabled={disabled || gameIsStart}
      onChange={(value) => {
        setUserRole(value);
        onChange?.();
      }}
      style={{ width: "120px" }}
    >
      <Option value={ticTacToeModel.roles.ERoles.cross}>Крестики</Option>
      <Option value={ticTacToeModel.roles.ERoles.zero}>Нули</Option>
    </Select>
  );
};
