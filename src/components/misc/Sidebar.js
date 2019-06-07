import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";
import Homepage from "../Hero_banner";
import StackHome from "../Stack_banner";
import Footer from "../Header_footer/Footer";
import Header1 from "../Header_footer/Header";
import Websocket from "react-websocket";
const sphero = require("../../mySphero");

export default class SidebarExampleMultiple extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      auth: "",
      headset: "",
      headsetStatus: "",
      com: null,
      count: 0
    };

    this.handleHideClick = this.handleHideClick.bind(this);
    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleSidebarHide = this.handleSidebarHide.bind(this);
    this.handleSidebarHide1 = this.handleSidebarHide1.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  handleHideClick() {
    this.setState({ visible: true });
  }
  handleShowClick() {
    this.setState({ visible: true });
  }
  handleSidebarHide() {
    this.setState({ visible: true });
  }
  handleSidebarHide1() {
    this.setState({ visible: false });
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
    console.log("Hello");
  }

  render() {
    const { visible } = this.state;

    return (
      <div clasName="featured_wrapper">
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            direction="left"
            icon="labeled"
            inverted
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="game" onClick={() => this.handleGo()} />
              Start EmoSpherO
            </Menu.Item>
          </Sidebar>

          <Sidebar
            as={Menu}
            animation="push"
            direction="right"
            inverted
            vertical
            visible={visible}
          >
            <Menu.Item as="a" header>
              Change The Color of Your
            </Menu.Item>
            <Menu.Item>
              <Button onClick={() => sphero.pink()}>Pink</Button>
            </Menu.Item>

            <Menu.Item>
              <Button onClick={() => sphero.blue()}>Blue</Button>
            </Menu.Item>
            <Menu.Item>
              <Button onClick={() => sphero.green()}>Green</Button>
            </Menu.Item>
            <Menu.Item>
              <Button inverted color="red" onClick={() => sphero.red()}>
                Red
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Icon
                name="chevron left"
                onClick={() => this.handleSidebarHide1()}
              >
                Close menu
              </Icon>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment
              style={{
                backgroundColor: "#293042"
              }}
            >
              <Button.Group>
                <Button
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0
                  }}
                  disabled={visible}
                  onClick={this.handleShowClick}
                >
                  Connect
                </Button>
              </Button.Group>
              <Header1 />
              <Homepage />
              <StackHome />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Footer />
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
