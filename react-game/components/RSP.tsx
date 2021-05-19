import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from './Common/Button';

const Container = styled.div`
  padding: 0 20px;
  .button-wrapper {
    display: flex;
    justify-content: space-around;
  }
`;

const rspMap = {
  Scissor: 2,
  Rock: 1,
  Paper: 0,
};

export function calcRSP(player: 'Scissor' | 'Rock' | 'Paper', bot = null) {
  if (
    !(player in rspMap) ||
    !(bot in rspMap) ||
    rspMap[player] > rspMap[bot] ||
    rspMap[player] - rspMap[bot] === -2
  ) {
    return 'lose';
  }
  if (rspMap[player] === rspMap[bot]) {
    return 'draw';
  }
  return 'win';
}

const RSP: React.FC = () => {
  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);
  const [draw, setDraw] = useState(0);

  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // console.log(e);
    const { value } = e.target as HTMLButtonElement;
    console.log(calcRSP(value));
    switch (calcRSP(value)) {
      case 'win':
        setWin((prev) => prev + 1);
        break;
      case 'lose':
        setLose((prev) => prev + 1);
        break;
      case 'draw':
        setDraw((prev) => prev + 1);
        break;
      default:
        console.log('hi');
        break;
    }
  }, []);

  return (
    <Container className='gugudan'>
      <h2>{`승: ${win} / 패 : ${lose} / 무 : ${draw}`}</h2>
      <div className='button-wrapper'>
        <Button value='Scissor' onClick={onClick}>
          가위
        </Button>
        <Button value='Rock' onClick={onClick}>
          바위
        </Button>
        <Button value='Paper' onClick={onClick}>
          보
        </Button>
      </div>
    </Container>
  );
};

export default RSP;
