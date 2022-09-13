import { FC } from "react";
import styles from "./header.module.scss";
import { MainLayout } from "shared/ui/MainLayout";
import { Typography } from "antd";
import { SelectRole } from "features/SelectRole";
import { StartGameBtn } from "features/GameStatusControls";
import { SurrenderBtn } from "features/GameStatusControls";

export const Header: FC = () => {
  return (
    <MainLayout>
      <div className={styles.header}>
        <Typography.Title
          level={1}
          style={{ color: "inherit", margin: 0, fontSize: "24px" }}
        >
          Крестики-нолики
        </Typography.Title>

        <div className={styles.gameBar}>
          <SelectRole></SelectRole>
          <StartGameBtn></StartGameBtn>
          <SurrenderBtn></SurrenderBtn>
        </div>
      </div>
    </MainLayout>
  );
};
