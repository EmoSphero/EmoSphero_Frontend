import React, { Component } from "react";
import { AppBar, Toolbar, Icon, Button } from "@material-ui/core";
import { Link } from "react-router";

export default class Header1 extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#fc1f6c",
          boxShadow: "none",
          padding: "10px 0",
          borderBottom: "4px solid #fff"
        }}
      >
        <i
          className="devicon-github-plain"
          style={{
            width: "20px"
          }}
        />
        <Toolbar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <Icon
              raised
              to="www.github.com"
              href="google.com"
              name="home"
              size="large"
            />
            <div />
            EmoSpherO
          </div>

          <Icon name="home" size="large" />
        </Toolbar>
      </AppBar>
    );
  }
}
