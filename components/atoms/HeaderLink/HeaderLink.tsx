import Link from "next/link";

import style from "./HeaderLink.module.scss";

import type { LinkProps } from "next/link";

interface HeaderLinkProps extends LinkProps {
  children: React.ReactNode;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ children, ...rest }) => {
  return (
    <Link {...rest} className={style.headerLink}>
      {children}
    </Link>
  );
};

export { HeaderLink };
