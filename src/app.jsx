import React from "react";
import Websocket from "react-websocket";
const sphero = require("./mySphero");

export default class App extends React.Component {
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
    this.setState(curr_state, function() {
      console.log(this.state);
    });
    if (curr_state.com !== null && curr_state.com !== undefined) {
      curr_state.com = result.com;
      this.handleSphero();
    }
  }

  handleOpen() {
    alert("connected");
  }

  handleClose() {
    alert("disconnected:(");
  }

  handleLogin() {
    let msg = {
      jsonrpc: "2.0",
      method: "login",
      params: {
        username: "avisai",
        password: "Q2eawdq2eawd!",
        client_id: "4kdtgBFAFVyITSGgaTtISvspnQKLLJfWnyelKPd3",
        client_secret:
          "3CQu17JHRhXVKpJKXwmAe7J6FshHDDswWRo0OaiNQIDBbNjKc9602N0vXjzQlmgqhibzxz0jHlw6UW8qXmxDSNDIk0yOw8Vnp57FIN7vDjq6hIwJsSvvEloMNeGmXqcb"
      },
      id: 1
    };

    this.refWebSocket.sendMessage(JSON.stringify(msg));
  }

  handleLogout() {
    let msg = {
      jsonrpc: "2.0",
      method: "logout",
      params: {
        username: "avisai"
      },
      id: 1
    };

    this.refWebSocket.sendMessage(JSON.stringify(msg));
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
    if (this.state.com[0] === "lift" && this.state.com[1] > 0.1) {
      sphero.moveSphero("FORWARD");
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome fdsfsqweto React!</h2>
        <button onClick={() => this.handleHello()}> Hello </button>
        <button onClick={() => sphero.spheroModule()}>Activate Lasers</button>
        <button onClick={() => this.handleLogin()}>Login</button>
        <button onClick={() => this.handleLogout()}>Logout</button>
        <button onClick={() => this.handleHeadset()}>
          Check Headset Status
        </button>
        <button onClick={() => this.handleAuth()}>Auth</button>
        <button onClick={() => this.handleProfile()}>Link Profile</button>
        <button onClick={() => this.handleNewSession()}>Create Session</button>
        <button onClick={() => this.handleSubscribe()}>Subscribe</button>
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
