import React from 'react';
import styled from 'styled-components';

interface IStyledProps {
  width?: string;
  height?: string;
}

const ContainerB = styled.button<IStyledProps>`
  outline: none;
  cursor: pointer;
  background-color: #faf3f3;
  border: 0;
  border-radius: 5px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, IStyledProps {}

const Button: React.FC<IProps> = ({ width = '200px', height = '200px', children, ...props }) => {
  return (
    <ContainerB width={width} height={height} {...props}>
      {children}
    </ContainerB>
  );
};

export default Button;
