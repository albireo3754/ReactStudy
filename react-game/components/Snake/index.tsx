import React, { ReactNode, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import { changeDirection, startGame } from '../../store/saga/snake';
import Box from './Box';
import { key } from './config';

export const ROW = 15;
export const COL = 15;

const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
    width: 100%;
    min-width: 320px;
    min-height: 320px;
  }
  body{

  }
  #root{
    height: 100%;
    width: 100%;
    background-color: rgba(178, 199, 218, 0.9);
    
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  p {
  font-size: 0.75rem;
  }
`;

const Container = styled.div`
  display: inline;
  .wrapper {
    display: grid;
    margin-left: 80px;
    width: ${COL * 40}px;
    height: ${ROW * 40}px;
    grid-template-columns: ${Array.from(Array(COL), (x) => `${40}px`).join(' ')};
    &:focus {
      outline: none;
    }
    grid-template-rows: ${Array.from(Array(ROW), (x) => `${40}px`).join(' ')};
    grid-gap: 5px;
    div {
      border-radius: 5px;
      background-color: #ffda8e;
      &:nth-child(even) {
        background-color: #fffff5;
      }
    }
  }
`;

const divSet: ReactNode[][] = Array.from(Array(ROW), (x, i) => {
  return Array.from(Array(COL), (x, j) => <Box row={i} col={j} />);
});

export interface IProps {}
const index: React.FC = () => {
  const dispatch = useDispatch();

  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    dispatch(startGame());
    console.log('game시작?');
    document.addEventListener('keydown', (e) => {
      dispatch(changeDirection(key[e.code.slice(5).toLowerCase()]));
    });
  }, []);
  return (
    <Container>
      <GlobalStyle />
      <div className='wrapper' ref={ref} tabIndex={0}>
        {divSet.flat()}
      </div>
    </Container>
  );
};

export default index;
