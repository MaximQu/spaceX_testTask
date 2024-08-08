import { Link } from "react-router-dom";
import st from "./style.module.scss";

const NotFound = () => {
  return (
    <section className={`${st.notFound} container`}>
      <h1 className={st.title}>
        <span>404</span>
        Page not found
      </h1>
      <p className={st.text}>Please try later or reload page.</p>
      <Link to="/" className={st.btn}>
        Back to Homepage
      </Link>
    </section>
  );
};

export default NotFound;
