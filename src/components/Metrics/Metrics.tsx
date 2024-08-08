import { FC, Fragment, ReactNode } from "react";
import st from "./style.module.scss";

type MetricsProps = {
  className?: string;
  name?: string;
  metrics?: {
    value?: string;
    unit?: ReactNode;
    key: string;
  }[];
};

const Metrics: FC<MetricsProps> = ({ name, metrics, className }) => {
  return (
    <div className={`${st.box} ${className}`}>
      <span>{name}</span>
      <span>
        {metrics
          ?.map(({ value, unit, key }) => (
            <Fragment key={key}>
              {value}
              {unit}
            </Fragment>
          ))
          .reduce<ReactNode[]>((acc, node, idx) => {
            if (idx === 0) {
              return [node];
            }
            return [...acc, <span key={`separator-${idx}`}> / </span>, node];
          }, [])}
      </span>
    </div>
  );
};

export default Metrics;
