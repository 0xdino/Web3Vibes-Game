import * as React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const Game: any = dynamic(() => import("@/components/Game/Game"));

export function GameContainer() {
  const { t } = useTranslation();
  const [activeGame, setActiveGame] = React.useState(false);
  const activateGame = () => {
    !activeGame && setActiveGame(true);
  };

  return (
    <SectionWrapper>
      <Section>
        {activeGame ? (
          <GameWrapper>
            <Game />
          </GameWrapper>
        ) : (
          <Button onClick={() => activateGame()}>{t("game.button")}</Button>
        )}
      </Section>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 12px;
  background: ${({ theme }) => theme.bg6};
  border: 1px solid var(--main-100);
  position: relative;
  isolation: isolate;

  @media screen and (min-width: 80rem) {
    grid-template-columns: auto 1fr;
  }
`;

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 20px;
  border: 1px solid var(--main-100);
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadowSm};

  & > *:last-child {
    background: none;

    th,
    td {
      background: ${({ theme }) => (theme.mode === "dark" ? "black" : "white")};
    }

    th:not(:last-child),
    td:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.divider};
    }

    border: 1px solid var(--main-100);

    @media screen and (min-width: ${({ theme }) => theme.bpLg}) {
      max-width: calc(100vw - 276px - 40px);
    }
  }

  @media (max-width: ${({ theme }) => theme.bpMed}) {
    margin: -12px;
  }
`;

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  grid-column: span 1;
  min-height: 300px;
  min-width: 50vw;
  border: 1px solid var(--main-100);
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    min-width: 90vw;
  }
`;

const Button = styled.button`
  padding: 20px;
  border: 1px solid var(--main-100);
  border-radius: 10px;
  font-family: "RussoOne";
  font-size: 26px;

  &:hover {
    background-color: var(--main-50);
  }
`;
