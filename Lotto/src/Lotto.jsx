import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import Ball from "./Ball.jsx";

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  const [winBalls, setWinBalls] = useState([]);
  const [winNumbers, setWinNumbers] = useState(getWinNumbers);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);

  const timeouts = useRef([]);
  const runTimeouts = () => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevState) => {
          return [...prevState, winNumbers[i]];
        });
      }, (i + 1) * 500);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 3500);
  };
  useEffect(() => {
    runTimeouts();
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]);

  const onClickRedo = () => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  };
  return (
    <>
      <div>당첨 숫자</div>
      <div id="result">
        {winBalls.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한번 더!</button>}
    </>
  );
};

// import React, { Component } from "react";
// class Lotto extends Component {
//   state = {
//     winNumbers: getWinNumbers(),
//     winBalls: [],
//     bonus: null,
//     redo: false,
//   };

//   timeouts = [];
//   runTimeouts = () => {
//     const { winNumbers } = this.state;
//     for (let i = 0; i < this.state.winNumbers.length - 1; i++) {
//       console.log(i);
//       this.timeouts[i] = setTimeout(() => {
//         this.setState((prevState) => {
//           return {
//             winBalls: [...prevState.winBalls, winNumbers[i]],
//           };
//         });
//       }, (i + 1) * 1000);
//     }
//     this.timeouts[6] = setTimeout(() => {
//       this.setState({
//         bonus: winNumbers[6],
//         redo: true,
//       });
//     }, 7000);
//   };
//   componentDidMount() {
//     this.runTimeouts();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.winBalls.length === 0) {
//       this.runTimeouts();
//     }
//   }
//   componentWillUnmount() {
//     this.timeouts.forEach((v) => {
//       clearTimeout(v);
//     });
//   }

//   onClickRedo = () => {
//     this.setState({
//       winNumbers: getWinNumbers(),
//       winBalls: [],
//       bonus: null,
//       redo: false,
//     });
//     this.timeouts = [];
//   };
//   render() {
//     const { winBalls, bonus, redo } = this.state;
//     return (
//       <>
//         <div>당첨 숫자</div>
//         <div id="result">
//           {winBalls.map((v) => (
//             <Ball key={v} number={v} />
//           ))}
//         </div>
//         <div>보너스!</div>
//         {bonus && <Ball number={bonus} />}
//         {redo && <button onClick={this.onClickRedo}>한번 더!</button>}
//       </>
//     );
//   }
// }

export default Lotto;
