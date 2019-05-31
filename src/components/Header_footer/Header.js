import React, { Component } from "react";
import { AppBar, Toolbar } from "@material-ui/core";

export default class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#293042",
          boxShadow: "none",
          padding: "10px 0 0"
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <div />
            EmoSpherO
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
