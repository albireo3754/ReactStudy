import React, { Component } from "react";

const rspCoords = {
  rock: "0px",
  scissor: "-142px",
  paper: "-284px",
};

const scores = {
  scissor: 1,
  rock: 0,
  paper: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};

class RSP extends Component {
  state = {
    result: "",
    imgCoord: 0,
    score: 0,
  };
  interval;

  componentDidMount() {
    this.interval = setInterval(this.changeHand, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeHand = () => {
    const { imgCoord } = this.state;
    console.log("hello");
    if (imgCoord === rspCoords.rock) {
      this.setState({
        imgCoord: rspCoords.scissor,
      });
    } else if (imgCoord === rspCoords.scissor) {
      this.setState({
        imgCoord: rspCoords.paper,
      });
    } else {
      this.setState({
        imgCoord: rspCoords.rock,
      });
    }
  };

  onClick = (choice) => () => {
    clearInterval(this.interval);
    console.log(choice);
    const { imgCoord } = this.state;
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    console.log(diff);
    if (diff === 0) {
      this.setState({
        result: "비겼습니다.!",
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: "이겼습니다..!",
          score: prevState.score + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: "졌습니다.!",
          score: prevState.score - 1,
        };
      });
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 500);
    }, 2000);
  };

  render() {
    const { result, score, imgCoord } = this.state;
    console.log(score);
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        ></div>
        <button id="scissor" className="btn" onClick={this.onClick("scissor")}>
          가위
        </button>
        <button id="rock" className="btn" onClick={this.onClick("rock")}>
          바위
        </button>
        <button id="paper" className="btn" onClick={this.onClick("paper")}>
          보
        </button>
        <div> {result} </div>
        <div> 현재 {this.state.score}점 </div>
      </>
    );
  }
}
export default RSP;