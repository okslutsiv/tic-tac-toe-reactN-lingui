import React, { useGlobal, useDispatch } from "reactn";
import styled from "styled-components";
import { Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";

import { calculateNextPlayer, calculateWinner, defineStatus } from "./utils";

import Board from "./Board";
import History from "./History";
import LangSwitch from "./Lang";

function App() {
  const [history] = useGlobal("history");
  const [currentStep] = useGlobal("currentStep");
  const writeHistory = useDispatch("writeHistory");
  const resetBoard = useDispatch("resetBoard");

  const { i18n } = useLingui();

  const currentBoard = history[currentStep];
  const nextPlayer = calculateNextPlayer(currentBoard);
  const winner = calculateWinner(currentBoard);

  const calculateBoard = (i) => {
    if (currentBoard[i] || winner) return;
    const newBoard = [...currentBoard];
    newBoard[i] = nextPlayer;
    writeHistory(newBoard);
  };
  return (
    <>
      <Nav>
        <LangSwitch />
        <div>
          <Trans>
            Welcome! Today is {i18n.date(new Date().toLocaleString())}
          </Trans>
        </div>
      </Nav>

      <Game>
        <Panel>
          <p style={{ textAlign: "center" }}>
            <Trans>{defineStatus(winner, currentBoard, nextPlayer)}</Trans>
          </p>

          <Board squares={currentBoard} selectCell={calculateBoard} />
          <div style={{ textAlign: "center" }}>
            <ResetBtn onClick={resetBoard}>
              <Trans>Reset</Trans>
            </ResetBtn>
          </div>
        </Panel>

        <Panel>
          <p style={{ textAlign: "center" }}>
            <Trans>History</Trans>
          </p>
          <History />
        </Panel>
      </Game>
    </>
  );
}

const Game = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 5%;
`;
const Panel = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: center;
`;
const ResetBtn = styled.button`
  padding: 8px;
  cursor: pointer;
  border: 1px solid grey;
  transition: all 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  margin-top: 24px;
  background: grey;
  color: white;
  &:hover {
    background: #555;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    outline: none;
  }
`;
const Nav = styled.div`
  width: calc(100% - 48px);
  height: 60px;
  background: grey;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  font-size: 12px;
`;
export default App;
