import React from "react";
import EmoSpherO from "./components/EmoSpherO";
const sphero = require("./mySphero");

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to EmoSpherO</h1>
        <EmoSpherO />
      </div>
    );
  }
}
