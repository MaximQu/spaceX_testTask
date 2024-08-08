import { FC, SVGAttributes } from "react";

type GlobeType = {
  width?: number;
  height?: number;
} & SVGAttributes<SVGElement>;

const Globe: FC<GlobeType> = ({ width = 35, height = 35, ...props }) => {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 34C26.6127 34 34 26.6127 34 17.5C34 8.3873 26.6127 1 17.5 1M17.5 34C8.3873 34 1 26.6127 1 17.5C1 8.3873 8.3873 1 17.5 1M17.5 34C26.0604 34 33 26.6127 33 17.5C33 8.3873 26.0604 1 17.5 1M17.5 34C8.93959 34 2 26.6127 2 17.5C2 8.3873 8.93959 1 17.5 1M17.5 34C23.8513 34 29 26.6127 29 17.5C29 8.3873 23.8513 1 17.5 1M17.5 34C11.1487 34 6 26.6127 6 17.5C6 8.3873 11.1487 1 17.5 1M17.5 34C21.0899 34 24 26.6127 24 17.5C24 8.3873 21.0899 1 17.5 1M17.5 34C13.9101 34 11 26.6127 11 17.5C11 8.3873 13.9101 1 17.5 1M17.5 34V1M15 1.4H20M10 2.9H25M10 32.1H25M7 4.9H28M7 30.1H28M4.5 7.4H30.5M4.57 27.65H30.42M2.65 10.4H32.2M1.5 13.9H33.5M1 17.4H33.8M1.5 21.15H33.5M2.8 24.9H32.2M13.5 33.4H21.5"
        stroke="white"
        strokeWidth="0.2"
      />
    </svg>
  );
};

export default Globe;
