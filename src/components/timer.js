import React from "react";
import { Divider } from "semantic-ui-react";

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 10,
      isOn: false
    };
  }

  startTimer() {
    this.setState({ isOn: true });
    this.decrementTimer();
  }

  decrementTimer() {
    let timer = setInterval(this.startTimer.bind(this), 1000);
    if (this.state.time > 0) {
      this.setState({ time: this.state.time - 1 });
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.startTimer()}>Start Timer</button>
        <p>{this.state.time}</p>
      </div>
    );
  }
}
