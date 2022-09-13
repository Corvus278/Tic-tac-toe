import { FC } from "react";
import { Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

interface IStartBtn {
  onClick?: () => void;
  disabled?: boolean;
}

export const StartBtn: FC<IStartBtn> = ({ onClick, disabled }) => {
  return (
    <Button
      icon={<PlayCircleOutlined />}
      onClick={onClick}
      disabled={disabled}
    ></Button>
  );
};
