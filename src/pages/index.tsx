import Image from "next/image";
import css from "@/styles/pages/index.module.scss";
import next from "@/assets/pages/index/next.svg";
import { useTranslation } from "react-i18next";
import Layout from "@/layout";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import right from "@/assets/arrows/right.svg";
import github from "@/assets/icons/github.svg";
import telegram from "@/assets/icons/telegram.svg";

/**
 * @dev Home Page
 */
export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Layout
      title="Web3Vibes Game"
      description="This project is an example of structuring the Next application"
    >
      <main className={css.main}>
        <div className={css.description_block}>
          <h1 className={css.description}>{t("index.description")}</h1>
          <Image
            className={css.logo}
            src={next}
            alt="Next.js Logo"
            width={200}
            priority
          />
        </div>
        <div className={css.buttons_block}>
          <Button
            text={t("header.button")}
            onclick={() => router.push("/game")}
            icon={{ src: right, alt: "", width: 20 }}
          />
          <a
            href={"https://github.com/0xdino/Web3Vibes-Game"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              text={
                <div>
                  <Image src={github} width={30} alt="" quality={100} />
                  View GitHub
                </div>
              }
              onclick={() => {}}
              {...{
                css: css.button_transparent,
              }}
            />
          </a>
          <a
            href={"http://t.me/Web3VibesDev"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              text={
                <div>
                  <Image src={telegram} width={30} alt="" quality={100} />
                  Telegram
                </div>
              }
              onclick={() => {}}
              {...{ css: css.button_transparent }}
            />
          </a>
        </div>
      </main>
    </Layout>
  );
}
