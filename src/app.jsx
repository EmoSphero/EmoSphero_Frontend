import React from "react";
import spheroModule from "./mySphero";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome fdsfsqweto React!</h2>
        <button onClick={spheroModule}>Activate Lasers</button>
        <button onClick={() => console.log("Hi")}>Activate Lasers</button>
      </div>
    );
  }
}
