import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";
import Websocket from "react-websocket";
const sphero = require("../../mySphero");

export default class Menubar extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      dimmed: false,
      animation: ""
    };
    this.handleHideClick = this.handleHideClick.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleSidebarHide = this.handleSidebarHide.bind(this);
  }
  handleData(data) {
    let result = JSON.parse(data);
    let curr_state = this.state;
    if (curr_state.headsetStatus === "") {
      curr_state.headset = result.result[0].id;
      curr_state.headsetStatus = result.result[0].status;
    }
    if (curr_state.auth === "" || curr_state.auth === undefined) {
      curr_state.auth = result.result._auth;
    }
    if (curr_state.com === null || curr_state.com === undefined) {
      curr_state.com = result.com;
    }
    if (curr_state.com !== null && curr_state.com !== undefined) {
      curr_state.com = result.com;
      this.handleSphero();
    }
    this.setState({ curr_state }, () => console.log(this.state));
    console.log(result);
  }

  handleOpen() {
    console.log("connected");
  }

  handleHeadset() {
    let msg = {
      jsonrpc: "2.0",
      method: "queryHeadsets",
      params: {
        id: "EPOCPLUS-*"
      },
      id: 1
    };
    this.refWebSocket.sendMessage(JSON.stringify(msg));
  }

  handleAuth() {
    let msg = {
      jsonrpc: "2.0",
      method: "authorize",
      params: {
        client_id: "4kdtgBFAFVyITSGgaTtISvspnQKLLJfWnyelKPd3",
        client_secret:
          "3CQu17JHRhXVKpJKXwmAe7J6FshHDDswWRo0OaiNQIDBbNjKc9602N0vXjzQlmgqhibzxz0jHlw6UW8qXmxDSNDIk0yOw8Vnp57FIN7vDjq6hIwJsSvvEloMNeGmXqcb"
      },
      id: 1
    };
    this.refWebSocket.sendMessage(JSON.stringify(msg));
  }

  handleProfile() {
    let msg = {
      jsonrpc: "2.0",
      method: "setupProfile",
      params: {
        _auth: this.state.auth,
        headset: this.state.headset,
        profile: "EmoSpherO",
        status: "load"
      },
      id: 1
    };
    this.refWebSocket.sendMessage(JSON.stringify(msg));
  }

  handleNewSession() {
    let msg = {
      jsonrpc: "2.0",
      method: "createSession",
      params: {
        _auth: this.state.auth,
        status: "open",
        headset: this.state.headset
      },
      id: 1
    };

    this.refWebSocket.sendMessage(JSON.stringify(msg));
  }

  handleSubscribe() {
    let msg = {
      jsonrpc: "2.0",
      method: "subscribe",
      params: {
        _auth: this.state.auth,
        streams: ["com"]
      },
      id: 1
    };

    this.refWebSocket.sendMessage(JSON.stringify(msg));
  }

  handleSphero() {
    if (this.state.com[0] === "push" && this.state.com[1] > 0.1) {
      sphero.moveSphero("FORWARD");
      this.handleIncrement();
    } else if (this.state.com[0] === "pull" && this.state.com[1] > 0.1) {
      sphero.moveSphero("BACKWARD");
    }
  }

  handleIncrement() {
    let curr_state = this.state;
    curr_state.count += 1;
    this.setState({ curr_state });
    console.log(this.state);
  }

  handleHideClick() {
    this.setState({ visible: true, dimmed: true });
  }
  handleSidebarHide() {
    this.setState({ visible: false });
  }
  handleGo() {
    let that = this;
    setTimeout(function() {
      sphero.spheroModule();
      setTimeout(function() {
        that.handleHeadset();
        setTimeout(function() {
          that.handleAuth();
          setTimeout(function() {
            that.handleProfile();
            setTimeout(function() {
              that.handleNewSession();
              setTimeout(function() {
                that.handleSubscribe();
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2500);
    }, 500);
    console.log("Hello");
  }

  render() {
    return (
      <div>
        <i className="fas fa-cogs" />
        <Button
          onClick={this.handleHideClick}
          style={{
            position: "fixed",
            margin: 16,
            right: 10,
            bottom: 50
          }}
        >
          Connect
        </Button>
        <Sidebar
          as={Segment}
          animation="scale down"
          direction="bottom"
          onHide={this.handleSidebarHide}
          visible={this.state.visible}
        >
          <p>Interactive Panel</p>

          <Grid columns={2} padded="horizontally">
            <Grid.Column>
              <Button positive onClick={() => this.handleGo()}>
                Connection
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button inverted color="red" onClick={() => sphero.red()}>
                Red
              </Button>
              <Button inverted color="blue" onClick={() => sphero.blue()}>
                Blue
              </Button>
              <Button inverted color="green" onClick={() => sphero.green()}>
                Green
              </Button>
            </Grid.Column>
          </Grid>
        </Sidebar>
        <Websocket
          url="wss://emotivcortex.com:54321"
          onMessage={this.handleData}
          onOpen={this.handleOpen}
          debug={true}
          ref={Websocket => {
            this.refWebSocket = Websocket;
          }}
        />
      </div>
    );
  }
}
