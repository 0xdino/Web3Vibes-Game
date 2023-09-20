import css from "@/styles/components/Footer/Footer.module.scss";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={css.section}>
      <h3>
        {t("footer.dev")}&nbsp;
        <a
          href={"https://github.com/0xdino"}
          target="_blank"
          rel="noopener noreferrer"
        >
          0xDino
        </a>
      </h3>
      <h3>{t("footer.cookies")}</h3>
    </footer>
  );
}
