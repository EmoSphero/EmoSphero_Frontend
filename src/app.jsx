import React from "react";
import EmoSpherO from "./components/EmoSpherO";
<<<<<<< HEAD

import MenuExampleStackable from "./components/Header";
const sphero = require("./mySphero");
=======
>>>>>>> 5f245d36e5c8c57447b276e6cac2d33a94258530

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
