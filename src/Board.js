import React from "reactn";
import styled from "styled-components";

export default function Board({ squares, selectCell }) {
  const renderCell = (i) => (
    <Cell onClick={() => selectCell(i)}>{squares[i]}</Cell>
  );
  return (
    <div>
      <Row>
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </Row>
      <Row>
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </Row>
      <Row>
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </Row>
    </div>
  );
}

const Cell = styled.button`
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: 1px solid grey;
  font-size: 24px;
  font-weight: bold;
`;
const Row = styled.div`
  display: flex;
  margin: 0 auto;
`;
