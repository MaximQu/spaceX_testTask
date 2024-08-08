import { STATS } from "@/common/constants";
import { FC } from "react";
import st from "./style.module.scss";

const Stats: FC = () => {
  return (
    <section className={`${st.stats} container`}>
      <h2 className="hide">Our stats</h2>
      <ul className={st.list}>
        {STATS.map(({ value, title, id }) => (
          <li key={id} className={st.item}>
            <span className={st.value}>{value}</span>
            <span className={st.title}>{title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stats;
