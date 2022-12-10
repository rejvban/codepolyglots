import style from "./FooterExternalLink.module.scss";

interface FooterExternalLink
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const FooterExternalLink: React.FC<FooterExternalLink> = ({ children, ...rest }) => {
  return (
    <a
      className={style.footerExternalLink}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
};

export { FooterExternalLink };
