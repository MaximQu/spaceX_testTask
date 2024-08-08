import { PAGES } from "@/common/constants";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import st from "./style.module.scss";

const Header: FC = () => {
  const { pathname } = useLocation();
  return (
    <header className={st.header}>
      <div className={`${st.content} container`}>
        <Link className={st.logoLink} to={"/"}>
          LOGO
        </Link>
        <nav>
          <ul className={st.list}>
            {PAGES.map(({ title, link }) => (
              <li
                key={title}
                className={`${st.item} ${link === pathname ? st.active : ""}`}
              >
                <Link to={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className={st.btn} type="button">
          Contact form
        </button>
      </div>
    </header>
  );
};

export default Header;
