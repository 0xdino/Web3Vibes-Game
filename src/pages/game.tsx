import * as React from "react";
import Layout from "@/layout";
import { GameContainer } from "@/containers/GameContainer";

/**
 * @dev Game Page
 */
export default function Game() {
  return (
    <Layout
      title="Web3Vibes Game"
      description="This project is an example of structuring the Next application"
    >
      <GameContainer />
    </Layout>
  );
}
