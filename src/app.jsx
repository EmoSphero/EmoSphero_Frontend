import React from "react";
import Header1 from "./components/Header_footer/Header";
import { Header } from "semantic-ui-react";
import Banner from "./components/Hero_banner/Banner";
import StackHome from "./components/Stack_banner";
const sphero = require("./mySphero");

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header1 />
        <Banner />
        <StackHome />
      </div>
    );
  }
}
