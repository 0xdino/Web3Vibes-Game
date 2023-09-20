import { useTranslation } from "react-i18next";

export default function useLocation() {
  const { i18n } = useTranslation();
  return i18n.language === "ru" ? "ru" : "en";
}
