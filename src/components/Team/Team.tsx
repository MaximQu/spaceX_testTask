import { CrewMember } from "@/types/CrewMember";
import Arrow from "@/ui/icons/Arrow";
import { FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import st from "./style.module.scss";

type TeamProps = {
  data?: CrewMember[];
};

const Team: FC<TeamProps> = ({ data }) => {
  const swiper = useSwiper();

  return (
    <section className={`${st.team} container`}>
      <div className={st.wrapper}>
        <div>
          <h2 className={st.title}>Team</h2>
          <p className={st.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            auctor sed urna a faucibus. Pellentesque mi nisl, mollis convallis
            metus id, congue semper neque. Sed suscipit eget ipsum ut gravida.
            Fusce
          </p>
        </div>
        <div className={st.btnWrapper}>
          <button
            onClick={() => swiper?.slidePrev()}
            type="button"
            data-role="none"
            className="team-swiper-button-prev"
            aria-label="Previous"
          >
            <Arrow width={60} height={60} />
          </button>
          <button
            onClick={() => swiper?.slideNext()}
            type="button"
            data-role="none"
            className="team-swiper-button-next"
            aria-label="Next"
          >
            <Arrow width={60} height={60} />
          </button>
        </div>
      </div>
      <Swiper
        className={st.swiper}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        grabCursor
        navigation={{
          nextEl: ".team-swiper-button-next",
          prevEl: ".team-swiper-button-prev",
        }}
      >
        {data?.map(({ name, image, agency, id }) => (
          <SwiperSlide className={st.slide} key={id}>
            <img
              className={st.img}
              loading="lazy"
              width={425}
              height={425}
              src={image}
              alt={name}
            />
            <p className={st.position}>{agency}</p>
            <h2 className={st.name}>{name}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Team;
