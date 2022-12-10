import Link from "next/link";

import style from "./FooterLink.module.scss";

import type { LinkProps } from "next/link";

interface FooterLinkProps extends LinkProps {
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, ...rest }) => {
  return (
    <Link {...rest} className={style.footerLink}>
      {children}
    </Link>
  );
};

export { FooterLink };
