import { FC } from "react";
import st from "./style.module.scss";

const PagePlaceholder: FC = () => {
  return (
    <div className={`${st.pagePlaceholder} container`}>
      <h1 className={st.title}>Placeholder page</h1>
    </div>
  );
};

export default PagePlaceholder;
