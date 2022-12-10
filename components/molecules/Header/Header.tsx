import { HeaderLink } from "../../atoms";

import style from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__container__logo}>
          <h1>codepolyglots</h1>
        </div>
        <nav className={style.header__container__navigation}>
          <HeaderLink href="/startup">for startups</HeaderLink>
          <HeaderLink href="/enterprise">for enterprise</HeaderLink>
          <HeaderLink href="/services">services</HeaderLink>
          <HeaderLink href="/our-work">our work</HeaderLink>
          <HeaderLink href="/careers">careers</HeaderLink>
          <HeaderLink href="/contact">contact</HeaderLink>
        </nav>
      </div>
    </header>
  );
};

export { Header };
