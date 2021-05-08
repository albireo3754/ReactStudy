import React from 'react';
import styled from 'styled-components';

const ContainerB = styled.button`
  outline: none;
  cursor: pointer;
  background-color: #faf3f3;
  border: 0;
  border-radius: 5px;
`;
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<IProps> = ({ children, ...props }) => {
  return <ContainerB {...props}>{children}</ContainerB>;
};

export default Button;
