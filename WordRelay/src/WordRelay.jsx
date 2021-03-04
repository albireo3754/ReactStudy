import React, { Component, useState, useRef } from "react";
const WordRelay = () => {
  const [word, setWord] = useState("훅버전..돌아왔구나");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setResult("정답입니다.");
    } else {
      setResult("틀렸습니다.");
    }
    setValue("");
    console.log(inputRef);
    inputRef.current.focus();
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="여기에 입력하세요"
          ref={inputRef}
          onChange={onChange}
          value={value}
        />
        <button> 입력 </button>
      </form>
      {result}
    </>
  );
};
export default WordRelay;
// export default class WordRelay extends React.Component {
//   state = {
//     word: "클래스버전",
//     value: "",
//     result: "",
//   };

//   onSubmitForm = (e) => {
//     e.preventDefault();
//     if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
//       this.setState({
//         word: this.state.value,
//         result: "딩동댕~",
//         value: "",
//       });
//     } else {
//       this.setState({
//         result: "틀렸어요~",
//         value: "",
//       });
//     }
//     this.input.focus();
//   };

//   onChangeInput = (e) => {
//     this.setState({ value: e.target.value });
//   };

//   onRefInput = (c) => {
//     this.input = c;
//   };

//   render() {
//     return (
//       <>
//         <div>{this.state.word}</div>
//         <form onSubmit={this.onSubmitForm}>
//           <input
//             ref={this.onRefInput}
//             value={this.state.value}
//             onChange={this.onChangeInput}
//           />
//           <button>입력</button>
//         </form>
//         <div>{this.state.result}</div>
//       </>
//     );
//   }
// }
