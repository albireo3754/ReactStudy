import React from 'react';
import styled from 'styled-components';

interface IStyledProps {
  /**width: '*px' */
  width?: string;
  /**height: '*px */
  height?: string;
}

const BContainer = styled.button<IStyledProps>`
  outline: none;
  cursor: pointer;
  background-color: #faf3f3;
  border: 0;
  border-radius: 5px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, IStyledProps {}

const Button: React.FC<IProps> = ({ width = '200px', height = '200px', children, ...props }) => {
  return (
    <BContainer width={width} height={height} {...props}>
      {children}
    </BContainer>
  );
};

export default Button;
