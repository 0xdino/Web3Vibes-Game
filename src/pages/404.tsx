import Layout from "@/layout";
import styled from "styled-components";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Style = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Text = styled.h1`
  font-size: 2em;
  text-align: center;
`;

export default function NotFound() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Layout title="Page not found" description="Page not found">
      <Style>
        <Text>404&nbsp;-&nbsp;{t("404.not-found")}</Text>
        <Button
          text={t("404.button")}
          onclick={() => {
            router.push("/");
          }}
        />
      </Style>
    </Layout>
  );
}
