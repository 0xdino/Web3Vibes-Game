import css from "@/styles/components/Header/Header.module.scss";
import Logo from "@/components/Header/Logo";
import ThemeSwitch from "@/components/Header/ThemeSwitch";
import Button from "@/components/Button";
import Lang from "@/components/Header/Lang";
import { useRouter } from "next/router";
import right from "@/assets/arrows/right.svg";
import { useTranslation } from "react-i18next";

export default function Header() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <header className={css.section}>
      <Logo />
      <div className={css.elems}>
        <Lang />
        <ThemeSwitch />
        <Button
          onclick={() => router.push("/game")}
          text={t("header.button")}
          icon={{ src: right, alt: "", width: 20 }}
        />
      </div>
    </header>
  );
}
