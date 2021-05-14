import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

export const FContainer = styled.form`
  button {
    margin-left: 10px;
  }
`;

const Form: React.FC = () => {
  return (
    <FContainer>
      <Input></Input>
      <Button width='60px' height='50px'>
        입력
      </Button>
    </FContainer>
  );
};

export default Form;
