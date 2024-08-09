import { PAGES } from "@/common/constants";
import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import st from "./style.module.scss";

const Header: FC = () => {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={st.header}>
      <div className={`${st.content} ${isOpen ? st.active : ""} container`}>
        <Link className={st.logoLink} onClick={() => setIsOpen(false)} to={"/"}>
          LOGO
        </Link>
        <nav>
          <ul className={st.list}>
            {PAGES.map(({ title, link }) => (
              <li
                onClick={() => setIsOpen(false)}
                key={title}
                className={`${st.item} ${link === pathname ? st.active : ""}`}
              >
                <Link to={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className={st.btn}
          onClick={() => setIsOpen(false)}
          type="button"
        >
          Contact form
        </button>
      </div>
      <button
        className={`${st.burgerMenu} ${isOpen ? st.activeMenu : ""}`}
        onClick={toggleMenu}
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
