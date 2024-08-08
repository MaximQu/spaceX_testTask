import { Metrics } from "@/components";
import { Dragon } from "@/types/Dragons";
import { FC, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import { FEET_CUBIC, METRE_CUBIC } from "@/common/constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { dragonMocks } from "./mocks/mocks";
import st from "./style.module.scss";

type DragonsSliderProps = {
  dragonList?: Partial<Dragon>[];
};

const DragonsSlider: FC<DragonsSliderProps> = ({ dragonList = [] }) => {
  const dragonsAndPlaceholders = useMemo(() => {
    return [...dragonList, ...dragonMocks];
  }, [dragonList]);


  return (
    <section className={`${st.dragonSlider} container`}>
      <h2 className={st.title}>Our rockets</h2>
      <Swiper
        className={st.swiper}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        grabCursor
        direction="horizontal"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {dragonsAndPlaceholders.map(
          ({
            diameter,
            height,
            imgUrl,
            launchPayloadMass,
            name,
            returnPayloadMass,
            trunkVolume,
            id,
          }) => (
            <SwiperSlide key={id} className={st.slide}>
              {id && (
                <Link to={id}>
                  <img
                    src={imgUrl ? imgUrl : "https://placehold.co/375x220"}
                    className={st.img}
                    width={375}
                    height={220}
                    alt={name}
                  />
                  <h2 className={st.heading}>{name}</h2>
                  <div className={st.list}>
                    <Metrics
                      name="HEIGHT"
                      metrics={[
                        { value: String(height?.meters), unit: "M", key: "M" },
                        { value: String(height?.feet), unit: "FT", key: "FT" },
                      ]}
                    />
                    <Metrics
                      name="DIAMETER"
                      metrics={[
                        {
                          value: String(diameter?.meters),
                          unit: "M",
                          key: "M",
                        },
                        {
                          value: String(diameter?.feet),
                          unit: "FT",
                          key: "FT",
                        },
                      ]}
                    />
                    <Metrics
                      name="TRUNK VOLUME"
                      metrics={[
                        {
                          value: String(trunkVolume?.cubic_meters),
                          unit: METRE_CUBIC,
                          key: "METRE_CUBIC",
                        },
                        {
                          value: String(trunkVolume?.cubic_feet),
                          unit: FEET_CUBIC,
                          key: "FEET_CUBIC",
                        },
                      ]}
                    />
                    <Metrics
                      name="LAUNCH PAYLOAD MASS"
                      metrics={[
                        {
                          value: String(launchPayloadMass?.kg),
                          unit: "KG",
                          key: "KG",
                        },
                        {
                          value: String(launchPayloadMass?.lb),
                          unit: "LBS",
                          key: "LBS",
                        },
                      ]}
                    />
                    <Metrics
                      name="RETURN PAYLOAD MASS"
                      metrics={[
                        {
                          value: String(returnPayloadMass?.kg),
                          unit: "KG",
                          key: "KG",
                        },
                        {
                          value: String(returnPayloadMass?.lb),
                          unit: "LBS",
                          key: "LBS",
                        },
                      ]}
                    />
                  </div>
                </Link>
              )}
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </section>
  );
};

export default DragonsSlider;
