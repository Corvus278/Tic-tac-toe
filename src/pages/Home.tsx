import { FC } from "react";
import { MainLayout } from "shared/ui/MainLayout";
import { GameBoard } from "widgets/GameBord";
import styles from "./home.module.scss";
import { GameEvents } from "features/GameEvents";

export const Home: FC = () => {
  return (
    <MainLayout>
      <GameEvents></GameEvents>
      <div className={styles.cont}>
        <GameBoard></GameBoard>
      </div>
    </MainLayout>
  );
};
