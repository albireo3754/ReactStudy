import React from "react";
import { useState, useRef } from "react";
const Gugudan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    if (parseInt(value) === first * second) {
      setResult("정답: " + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
    } else {
      setResult("땡");
      setValue("");
    }
    console.log(inputRef, inputRef.current);
    inputRef.current.focus();
  };
  return (
    <>
      <div>{`${first} 곱하기 ${second} 는?`}</div>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />
        <button> 입력! </button>
      </form>
      {result}
    </>
  );
};

export default Gugudan;

// export default class GuGuDan extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       first: Math.ceil(Math.random() * 9),
//       second: Math.ceil(Math.random() * 9),
//       value: "",
//       result: "",
//     };
//   }

//   onSubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target[0].value);
//     if (parseInt(this.state.value) === this.state.first * this.state.second) {
//       this.setState((prevState) => {
//         return {
//           result: `${prevState.first} * ${prevState.second} = ${prevState.value} 정답`,
//           first: Math.ceil(Math.random() * 9),
//           second: Math.ceil(Math.random() * 9),
//           value: "",
//         };
//       });
//     } else {
//       this.setState({
//         result: "땡",
//         value: "",
//       });
//       this.input.focus();
//     }
//   };

//   input;

//   render() {
//     return (
//       <React.Fragment>
//         <div>{`${this.state.first} 곱하기 ${this.state.second}는?`}</div>
//         <form onSubmit={this.onSubmit}>
//           <input
//             ref={(c) => {
//               this.input = c;
//             }}
//             type="number"
//             value={this.state.value}
//             onChange={(e) => this.setState({ value: e.target.value })}
//           />
//           <button>입력</button>
//         </form>
//         <div>{this.state.result}</div>
//       </React.Fragment>
//     );
//   }
// }
