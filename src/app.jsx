import React from "react";
import EmoSpherO from "./components/EmoSpherO";
import Header from "./components/Header_footer/Header";
import Homepage from "./components/Hero_banner";
const sphero = require("./mySphero");

export default class App extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#293042"
        }}
      >
        <Header />

        <h1>Welcome to EmoSpherO</h1>
        <Homepage />
        <EmoSpherO />
      </div>
    );
  }
}
