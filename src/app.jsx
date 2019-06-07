import React from "react";
import SidebarExampleMultiple from "./components/misc/Sidebar";
const sphero = require("./mySphero");

export default class App extends React.Component {
  render() {
    return (
      <div className="background">
        <SidebarExampleMultiple />
      </div>
    );
  }
}
