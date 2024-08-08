import { Header } from "@/components";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import st from "./style.module.scss";

export const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main className={st.main}>
        <Outlet />
      </main>
    </>
  );
};
