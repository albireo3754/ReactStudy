import React from "react";

const Try = ({ tryInfo: { try: try_, result } }) => {
  return (
    <li>
      <div>{try_}</div>
      <div>{result}</div>
    </li>
  );
};

// import React, { Component } from "react";

// class Try extends Component {
//   render() {
//     return (
//       <li>
//         <div>{this.props.tryInfo.try}</div>
//         <div>{this.props.tryInfo.result}</div>
//       </li>
//     );
//   }
// }

export default Try;
