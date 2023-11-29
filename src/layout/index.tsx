import Head from "next/head";
import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Exo2 from "@/assets/fonts/Exo2-VariableFont_wght.ttf";
import RussoOne from "@/assets/fonts/RussoOne-Regular.ttf";

interface ILayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Layout({ title, description, children }: ILayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="theme-color" content="#001320" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="preload"
          href={Exo2}
          crossOrigin="anonymous"
          as="font"
          type="font/ttf"
        />
        <link
          rel="preload"
          href={RussoOne}
          crossOrigin="anonymous"
          as="font"
          type="font/ttf"
        />
      </Head>
      <Header />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </>
  );
}
