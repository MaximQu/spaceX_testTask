import { FC } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GALLERY_DATA } from "@/common/constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import st from "./style.module.scss";

const Gallery: FC = () => {
  return (
    <section className={st.gallery}>
      <h2 className="hide">Gallery</h2>
      <Swiper
        className={st.swiper}
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        grabCursor
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {GALLERY_DATA.map(({ imgURL, text, title }) => (
          <SwiperSlide key={imgURL}>
            <img className={st.img} loading="lazy" src={imgURL} alt={title} />
            <div className={st.wrapper}>
              <h2 className={st.title}>{title}</h2>
              <p className={st.text}>{text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
