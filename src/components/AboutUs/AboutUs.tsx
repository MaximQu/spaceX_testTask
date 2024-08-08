import { FC } from "react";
import st from "./style.module.scss";

const AboutUs: FC = () => {
  return (
    <section className={`${st.about} container`}>
      <h2 className={st.title}>About us</h2>
      <iframe
        className={st.video}
        width="1320"
        height="535"
        src="https://www.youtube-nocookie.com/embed/C3iHAgwIYtI?si=HcAAxg4dp7xoxdOs"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
};

export default AboutUs;
