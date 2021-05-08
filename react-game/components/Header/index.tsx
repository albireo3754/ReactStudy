import Router from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 3px solid #e1e5ea;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Link href='/game/rsp'>
        <Button height='50px'>가위바위보 게임</Button>
      </Link>
    </Container>
  );
};

export default Header;
