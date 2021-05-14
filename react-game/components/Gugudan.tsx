import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 20px;
`;

export function pickRandom() {
  return Math.ceil(Math.random() * 9);
}

const Gugudan: React.FC = () => {
  const [first, setFirst] = useState(pickRandom());
  const [second, setSecond] = useState(pickRandom());
  const [value, setValue] = useState('');
  const [result, setResult] = useState<null | string>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    console.log(value, typeof value);
    if (parseInt(value) === first * second) {
      setResult(`정답: ${value}`);
      setFirst(pickRandom());
      setSecond(pickRandom());
      setValue('');
    } else {
      setResult('땡');
      setValue('');
    }
    inputRef.current?.focus();
  };

  const onChangeInput = useCallback((e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }, []);

  return (
    <Container className='gugudan'>
      <h2>{`${first} 곱하기 ${second} 는?`}</h2>
      <form onSubmit={onSubmit}>
        <input name='value' ref={inputRef} onChange={onChangeInput} value={value} />
        <button> 입력! </button>
      </form>
      {result}
    </Container>
  );
};

export default Gugudan;
