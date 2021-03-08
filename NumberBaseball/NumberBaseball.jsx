import React, { useState, memo } from "react";
import Try from "./Try.jsx";

function getNumbers(n = 4) {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const answer = Array(n)
    .fill(0)
    .map((_, i) => {
      return candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    });
  return answer;
}

const 넘버볼 = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const gameReset = (command) => {
    alert(command);
    setValue("");
    setAnswer(getNumbers());
    setTries([]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value === answer.join("")) {
      const success = "홈런!";
      gameReset(success);
    } else {
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        const fail = `10번 넘게 돌려서 실패! 답은 ${answer.join("")}였습니다!`;
        gameReset(fail);
      } else {
        answerArray.map((v, i) => {
          if (v === answer[i]) strike++;
          else if (answer.includes(v)) ball++;
        });
        setTries((prevTries) => {
          return [
            ...prevTries,
            {
              try: value,
              result: `${strike} 스트라이크, ${ball} 볼입니다.`,
            },
          ];
        });
        setValue("");
      }
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <h1>result</h1>
      <form onSubmit={onSubmit}>
        <input maxLength={4} value={value} onChange={onChange} />
      </form>
      <div>시도 : {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={`${i + 1}차 시도 :`} tryInfo={v} />;
        })}
      </ul>
    </>
  );
};

// import React, { Component } from "react";
// import Try from "./Try.jsx";

// function getNumbers(n = 4) {
//   const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const answer = Array(n)
//     .fill(0)
//     .map((_, i) => {
//       return candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
//     });
//   return answer;
// }

// class NumberBaseball extends Component {
//   state = {
//     result: "",
//     value: "",
//     answer: getNumbers(),
//     tries: [],
//   };

//   gameReset = (command) => {
//     alert(command);
//     this.setState({
//       value: "",
//       answer: getNumbers(),
//       tries: [],
//     });
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.value === this.state.answer.join("")) {
//       const success = "홈런!";
//       this.gameReset(success);
//     } else {
//       const answerArray = this.state.value.split("").map((v) => parseInt(v));
//       let strike = 0;
//       let ball = 0;
//       if (this.state.tries.length >= 9) {
//         const fail = `10번 넘게 돌려서 실패! 답은${this.state.answer.join(
//           ","
//         )} 였습니다!`;
//         this.gameReset(fail);
//       } else {
//         answerArray.map((v, i) => {
//           if (v === this.state.answer[i]) strike++;
//           else if (this.state.answer.includes(v)) ball++;
//         });
//         this.setState({
//           tries: [
//             ...this.state.tries,
//             {
//               try: this.state.value,
//               result: `${strike} 스트라이크, ${ball} 볼입니다.`,
//             },
//           ],
//           value: "",
//         });
//       }
//     }
//   };
//   onChange = (e) => {
//     this.setState({ value: e.target.value });
//   };
//   render() {
//     return (
//       <>
//         <h1>this.result</h1>
//         <form onSubmit={this.onSubmit}>
//           <input
//             maxLength={4}
//             value={this.state.value}
//             onChange={this.onChange}
//           />
//         </form>
//         <div>시도 : {this.state.tries.length}</div>
//         <ul>
//           {this.state.tries.map((v, i) => {
//             return <Try key={`${i + 1}차 시도 :`} tryInfo={v} />;
//           })}
//         </ul>
//       </>
//     );
//   }
// }

export default memo(넘버볼);
