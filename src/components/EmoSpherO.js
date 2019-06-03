import React from "react";
import Websocket from "react-websocket";
import { Button } from "semantic-ui-react";
const sphero = require("../mySphero");

export default class EmoSpherO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: "",
      headset: "",
      headsetStatus: "",
      com: null,
      count: 0
    };
    this.handleData = this.handleData.bind(this);
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
  }

  render() {
    return (
      <div className="banner_wrapper">
        <div>
          <ul>
            <h2>Prerequisites</h2>
            <h3>Emotiv</h3>
            <li>Have CortexUI Installed and Running</li>
            <li>Your Headset Is Paired</li>
            <h3>Sphero</h3>
            <li>Have Sphero Connected To Your Computer</li>
          </ul>
          <Button onClick={() => this.handleGo()}>Let's Roll</Button>
          <h2>Change The Color Of Your Sphero</h2>
          <Button onClick={() => sphero.pink()}>Pink</Button>
          <Button onClick={() => sphero.blue()}>Blue</Button>
          <Button onClick={() => sphero.green()}>Green</Button>
          <Button onClick={() => sphero.red()}>Red</Button>
        </div>
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
