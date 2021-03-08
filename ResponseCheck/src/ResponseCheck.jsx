import React, { PureComponent } from "react";

class ResponseCheck extends PureComponent {
  state = {
    state: "wating",
    message: "클릭해서 시작하세요.",
    result: [],
  };

  timeout;
  startTime;
  endTime;

  onClick = () => {
    const { state, message, result } = this.state;
    if (state === "wating") {
      this.setState({
        state: "ready",
        message: "초록색이 되면 화면을 클릭하세요",
      });

      this.timeout = setTimeout(() => {
        this.setState({
          state: "now",
          message: "지금 클릭",
        });
      }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤
      this.startTime = new Date();
    } else if (state === "ready") {
      clearTimeout(this.timeout);
      // 성급하게 클릭
      this.setState({
        state: "wating",
        message: "너무 성급하시군요! 초록색이 된 후에 클릭하세요.",
      });
    } else if (state === "now") {
      // 반응속도 체크
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: "wating",
          message: "클릭해서 시작하세요",
          result: [...prevState.result, this.endTime - this.startTime],
        };
      });
    }
  };

  onReset = () => {
    this.setState({
      result: [],
    });
  };
  renderAverage = () => {
    const { result } = this.state;
    console.log(result);
    if (result.length !== 0) {
      return (
        <div>{`평균 시간: ${
          result.reduce((acc, cur) => acc + cur) / result.length
        } ms`}</div>
      );
    }
  };
  render() {
    return (
      <>
        <div id="screen" className={this.state.state} onClick={this.onClick}>
          {this.state.message}
        </div>
        {this.renderAverage()}
        <button onClick={this.onReset}>리셋</button>
      </>
    );
  }
}

export default ResponseCheck;
