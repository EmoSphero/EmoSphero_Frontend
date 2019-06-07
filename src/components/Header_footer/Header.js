import React, { Component } from "react";
import { AppBar, Toolbar, Icon, Button } from "@material-ui/core";

export default class Header1 extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#26282A",
          boxShadow: "none",
          padding: "10px 0",
          borderBottom: "2px solid #fff"
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    );
  }
}
