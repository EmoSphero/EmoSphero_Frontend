import React from "react";
import EmoSpherO from "./components/EmoSpherO";
import Header from "./components/Header_footer/Header";
import Homepage from "./components/Hero_banner";
import Footer from "./components/Header_footer/Footer";
import StackHome from "./components/Stack_banner";
import SidebarExampleDimmed from "./components/misc/Sidebar";
const sphero = require("./mySphero");

export default class App extends React.Component {
  render() {
    return (
      <div
        className="backgroundColor"
        style={{
          backgroundColor: "#293042"
        }}
      >
        <Header />

        <h1>Welcome to EmoSpherO</h1>
        <Homepage />
        <StackHome />
        <EmoSpherO />
        <SidebarExampleDimmed />
        <Footer />
      </div>
    );
  }
}
