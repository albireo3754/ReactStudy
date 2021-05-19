import Router from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '../Common/Button';

const Container = styled.ul`
  display: flex;
  padding: 10px;
  list-style: none;
  border-bottom: 3px solid #e1e5ea;
  margin: 0px;
  li {
    margin: 10px;
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <li>
        <Link href='/game/rsp'>
          <Button height='50px'>가위바위보 게임</Button>
        </Link>
      </li>
      <li>
        <Link href='/game/gugudan'>
          <Button height='50px'>구구단 게임</Button>
        </Link>
      </li>
      <li>
        <Link href='/game/numberbaseball'>
          <Button height='50px'>숫자야구 게임</Button>
        </Link>
      </li>
    </Container>
  );
};

export default Header;
