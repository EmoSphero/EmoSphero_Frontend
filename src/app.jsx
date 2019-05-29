import React from "react";
import EmoSpherO from "./components/EmoSpherO";

import MenuExampleStackable from "./components/Header_footer/Header";
const sphero = require("./mySphero");

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MenuExampleStackable />

        <h1>Welcome to EmoSpherO</h1>
        <EmoSpherO />
      </div>
    );
  }
}
