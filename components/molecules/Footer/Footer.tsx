import { FooterLink, FooterExternalLink } from "../../atoms";
import style from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__container__content}>
          <div className={style.footer__container__content__logo}>
            <h3>codepolyglots</h3>
            <span>startup speed, enterprise quality</span>
          </div>
          <div>
            <FooterLink href="/about">about</FooterLink>
            <FooterLink href="/startup">startups</FooterLink>
            <FooterLink href="/enterprise">enterprise</FooterLink>
            <FooterLink href="/methods">methods</FooterLink>
            <FooterLink href="/careers">careers</FooterLink>
          </div>
          <div>
            <FooterExternalLink href="https://github.com/codepolyglots">github</FooterExternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
