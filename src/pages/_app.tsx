import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { I18nextProvider } from "react-i18next";
import i18 from "@/i18";
import Cookies from "universal-cookie";
import { useTranslation } from "react-i18next";
import Preloader from "@/components/Preloader";

export default function App({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cookies = new Cookies();
    const language: any = cookies.get("language");
    language !== "en" && i18n.changeLanguage(language);
  }, [i18n]);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, [router]);

  return (
    <I18nextProvider i18n={i18}>
      <ThemeProvider themes={["dark", "light"]} defaultTheme="dark">
        {loading ? <Preloader /> : <Component {...pageProps} />}
      </ThemeProvider>
    </I18nextProvider>
  );
}
