import Globe from "@/ui/icons/Globe";
import { FC } from "react";
import st from "./style.module.scss";

const Hero: FC = () => {
  return (
    <section className={`${st.hero} container`}>
      <h1 className={st.title}>dive deep in to the future</h1>
      <div className={st.wrapper}>
        <Globe />
        <div className={st.bottomLine}></div>
      </div>
    </section>
  );
};

export default Hero;
