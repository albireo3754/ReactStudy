import React from 'react';
import styled from 'styled-components';
import Button from '../Common/Button';
import Input from '../Common/Input';
const Container = styled.div`
  padding: 20px;
`;

const InitGame: React.FC = () => {
  return (
    <Container>
      가로:
      <form>
        <Input></Input>
        <Button height='50px'></Button>
      </form>
      세로:
      <form>
        <Input></Input>
        <Button height='50px'></Button>
      </form>
    </Container>
  );
};

export default InitGame;
