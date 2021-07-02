import React from 'react';
import styled from 'styled-components';
import GameBoard from './GameBoard';
import InitGame from './InitGame';

const Container = styled.div`
  width: 800px;
  height: 600px;
`;

const MineSearch: React.FC = () => {
  return (
    <Container>
      <InitGame />
      <GameBoard />
    </Container>
  );
};

export default MineSearch;
