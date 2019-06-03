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
      com: null
    };
    this.handleData = this.handleData.bind(this);
  }

  handleData(data) {
    let result = JSON.parse(data);
    let curr_state = this.state;
    if (curr_state.headsetStatus === "") {
      curr_state.headset = result.result[0].id;
      curr_state.headsetStatus = result.result[0].status;
      if (curr_state.headsetStatus === "connected") {
        alert("Headset is Connected!");
      }
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
    this.setState(curr_state, function() {
      console.log(this.state);
    });
  }

  handleOpen() {}

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
    } else if (this.state.com[0] === "pull" && this.state.com[1] > 0.1) {
      sphero.moveSphero("BACKWARD");
    }
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
          <h2>Step 1</h2>
          <Button onClick={() => sphero.spheroModule()}>
            Connect To Sphero
          </Button>
          <h2>Step 2</h2>
          <Button onClick={() => this.handleHeadset()}>
            Check Headset Connection
          </Button>
          <h2>Step 3</h2>
          <Button onClick={() => this.handleAuth()}>
            Generate Authenticity Token
          </Button>
          <h2>Step 4</h2>
          <Button onClick={() => this.handleProfile()}>
            Load User Profile
          </Button>
          <h2>Step 5</h2>
          <Button onClick={() => this.handleNewSession()}>
            Create A New Session
          </Button>
          <h2>Step 6</h2>
          <Button onClick={() => this.handleSubscribe()}>
            Subscribe To Session
          </Button>
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
