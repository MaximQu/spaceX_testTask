import { FEET_CUBIC, METRE_CUBIC } from "@/common/constants";
import { Dragon } from "@/types/Dragons";
import { FC } from "react";
import Metrics from "../Metrics/Metrics";
import st from "./style.module.scss";

type DetailedInfoProps = {
  data: Dragon;
};

const DetailedInfo: FC<DetailedInfoProps> = ({ data }) => {
  return (
    <section className={`${st.detailedInfo} container`}>
      <div className={st.wrapper}>
        <img
          className={st.img}
          src={data.imgUrl ? data.imgUrl : "https://placehold.co/450x450"}
          width={835}
          height={450}
          alt={data.name}
        />
        <div className={st.content}>
          <h2 className={st.heading}>{data.name}</h2>
          <div className={st.list}>
            <Metrics
              name="HEIGHT"
              metrics={[
                { value: String(data.height?.meters), unit: "M", key: "M" },
                { value: String(data.height?.feet), unit: "FT", key: "FT" },
              ]}
            />
            <Metrics
              name="DIAMETER"
              metrics={[
                { value: String(data.diameter?.meters), unit: "M", key: "M" },
                { value: String(data.diameter?.feet), unit: "FT", key: "FT" },
              ]}
            />
            <Metrics
              name="TRUNK VOLUME"
              metrics={[
                {
                  value: String(data.trunkVolume?.cubic_meters),
                  unit: METRE_CUBIC,
                  key: "METRE_CUBIC",
                },
                {
                  value: String(data.trunkVolume?.cubic_feet),
                  unit: FEET_CUBIC,
                  key: "FEET_CUBIC",
                },
              ]}
            />
            <Metrics
              name="LAUNCH PAYLOAD MASS"
              metrics={[
                {
                  value: String(data.launchPayloadMass?.kg),
                  unit: "KG",
                  key: "KG",
                },
                {
                  value: String(data.launchPayloadMass?.lb),
                  unit: "LBS",
                  key: "LBS",
                },
              ]}
            />
            <Metrics
              name="RETURN PAYLOAD MASS"
              metrics={[
                {
                  value: String(data.returnPayloadMass?.kg),
                  unit: "KG",
                  key: "KG",
                },
                {
                  value: String(data.returnPayloadMass?.lb),
                  unit: "LBS",
                  key: "LBS",
                },
              ]}
            />
            <Metrics
              name="ACTIVE"
              metrics={[
                {
                  value: data.active ? "Active" : "Inactive",
                  key: "ACTIVE",
                },
              ]}
            />
            <Metrics
              name="CREW CAPACITY"
              metrics={[
                {
                  value: String(data.crewCapacity),
                  key: "CREW CAPACITY",
                },
              ]}
            />
            <Metrics
              name="TYPE"
              metrics={[
                {
                  value: data.type,
                  key: "TYPE",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedInfo;
