import React from 'react';
import styled from 'styled-components';

export const IContainer = styled.input`
  width: 348px;
  height: 50px;
  padding: 14px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  border: 3px solid #faf3f3;
  outline: none;
  ::placeholder {
    color: #bfbfbf;
  }
  :focus {
    border: 2px solid #733030;
    box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.2);
  }
`;

export interface IProps extends React.HTMLProps<HTMLInputElement> {}

const Input: React.FC<IProps> = ({ onChange, ...props }) => {
  return <IContainer onChange={onChange}></IContainer>;
};

export default Input;
