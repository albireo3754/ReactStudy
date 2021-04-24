import styled from 'styled-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { TDirection } from '../types/store';
import { RootState } from '../store';
interface IProps {
  row: number;
  col: number;
}

const Container = styled.div<{ direction: TDirection }>`
  background-color: ${({ direction }) => {
    switch (direction) {
      case 0:
      case 1:
      case 2:
      case 3:
        return '#35357B !important';
      case -3:
        return '#FF6A00 !important';
      default:
        return;
    }
  }};
`;

const Box: React.FC<IProps> = ({ row, col }) => {
  const direction = useSelector<RootState>(
    (state) => state.directions.directions[row][col]
  );
  return <Container direction={direction as TDirection}></Container>;
};

export default Box;
