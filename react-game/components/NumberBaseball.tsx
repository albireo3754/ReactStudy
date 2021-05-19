import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from './Common/Button';
import Input from './Common/Input';
import _ from 'lodash';

const Container = styled.div`
  padding: 0 20px;
`;

export function pickRandomNumbers(n: number): number[] {
  let size = 10;

  const array = Array.from(Array(size), (_, v) => v);
  const numbers = [];
  for (let i = 0; i < n; i++) {
    const temp = _.random(0, size - 1);
    numbers.push(array.splice(temp, 1)[0]);
    size -= 1;
  }
  return numbers;
}

const NumberBaseball: React.FC = () => {
  const N = 4;
  const [result, setResult] = useState<string[]>([]);
  const [answer, setAnswer] = useState(pickRandomNumbers(4));
  const [value, setValue] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submited = Array.from(value, (x) => parseInt(x));
    console.log(submited, answer, value);
    let [strike, ball] = [0, 0];
    submited.forEach((val, idx) => {
      if (val === answer[idx]) {
        strike++;
      } else if (answer.includes(val)) {
        ball++;
      }
    });
    setResult((prev) => [...prev, `${strike}스트라이크 ${ball}볼`]);
  };

  const onChangeInput = useCallback((e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }, []);

  return (
    <Container>
      <h2>{`${N}자리 0 ~ 9를 입력해보세요.`}</h2>
      <form onSubmit={onSubmit}>
        <Input onChange={onChangeInput}></Input>
        <Button width='50px' height='50px'>
          입력
        </Button>
      </form>
      {result.map((data) => {
        return <p>{`${data}`}</p>;
      })}
    </Container>
  );
};

export default NumberBaseball;
