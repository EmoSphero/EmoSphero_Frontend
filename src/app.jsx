import React from "react";
import EmoSpherO from "./components/EmoSpherO";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";

import MenuExampleStackable from "./components/Header_footer/Header";
const sphero = require("./mySphero");

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "haha@lol.com",
      password1: "",
      password2: ""
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({
      password1: event.target.value,
      password2: event.target.value
    });
  }

  handleSubmit() {
    const user = JSON.stringify(this.state);
    console.log(user);
    axios
      .post(
        //"http://127.0.0.1:8000/api/rest-auth/registration/",
        "http://localhost:8000/api/user",
        { user },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(
        r => {
          console.log(r);
        },
        e => {
          console.log("Got error" + e);
        }
      );
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <EmoSpherO />
        <Form>
          <Form.Field>
            <label>Username</label>
            <input
              placeholder="Enter Your Username"
              onChange={this.handleUsernameChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Enter Your Password"
              onChange={this.handlePasswordChange}
            />
          </Form.Field>
          <Button type="submit" onClick={() => this.handleSubmit()}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
