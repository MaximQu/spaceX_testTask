import { FC } from "react";
import st from "./style.module.scss";

type LoaderProps = {
  className?: string;
};

const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={`${st.loader} ${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
