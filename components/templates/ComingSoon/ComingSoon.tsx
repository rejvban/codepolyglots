import style from "./ComingSoon.module.scss";

import Image from "next/image";

const ComingSoon: React.FC = () => {
  return (
    <div className={style.comingSoon}>
      <div className={style.comingSoon__content}>
        <div className={style.comingSoon__content__image}>
          <Image
            src="/images/error.png"
            fill
            style={{ objectFit: "contain" }}
            alt="Coming Soon"
          />
        </div>
      </div>
    </div>
  );
};

export { ComingSoon };
