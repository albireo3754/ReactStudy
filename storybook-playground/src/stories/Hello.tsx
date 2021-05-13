import React from "react";
import styled from "styled-components";

const Container = styled.div``;

export interface IProps {
  /**
   * 이름입니다.
   * */
  name: string;
  /**크기조절입니다. */
  big: boolean;
  onHello: () => void;
  onBye: () => void;
}

const Hello: React.FC<IProps> = ({ name, big, onHello, onBye }) => {
  return (
    <Container>
      {big ? <h1>안녕하세요, {name}!</h1> : <p>안녕하세요, {name}!</p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </Container>
  );
};

export default Hello;
