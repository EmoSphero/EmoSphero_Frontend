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
import EmoSpherO from "../EmoSpherO";
import Footer from "../Header_footer/Footer";
import Header1 from "../Header_footer/Header";

export default class SidebarExampleMultiple extends Component {
  constructor() {
    super();
    this.state = { visible: false };
    this.handleHideClick = this.handleHideClick.bind(this);
    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleSidebarHide = this.handleSidebarHide.bind(this);
  }

  handleHideClick() {
    this.setState({ visible: false });
  }
  handleShowClick() {
    this.setState({ visible: true });
  }
  handleSidebarHide() {
    this.setState({ visible: true });
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            direction="left"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
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
              <Button
                inverted
                color="red"
                circular
                onClick={() => sphero.red()}
              >
                Red
              </Button>
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
              <EmoSpherO />
              <Footer />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
