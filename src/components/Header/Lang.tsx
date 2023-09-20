import Image from "next/image";
import lang from "@/assets/components/Header/Lang/lang.svg";
import css from "@/styles/components/Header/Lang.module.scss";
import { useTranslation } from "react-i18next";
import useLocation from "@/hooks/useLocation";
import Cookies from "universal-cookie";

export default function Lang() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const cookies = new Cookies();

  const clientSideLanguageChange = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
    cookies.set("language", newLocale);
  };

  return (
    <>
      <div
        className={css.selected}
        onClick={() => {
          const changeTo = location === "en" ? "ru" : "en";
          clientSideLanguageChange(changeTo);
        }}
      >
        <Image src={lang} width={32} alt="" quality={100} />
        {location.toUpperCase()}
      </div>
    </>
  );
}
