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
      user_id: 1,
      score: 100
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handleUserSubmit() {
    const user = JSON.stringify(this.state.username);
    axios
      .post(
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

  handleScoreSubmit() {
    const score = JSON.stringify(this.state.score);
    const user_id = JSON.stringify(this.state.user_id);
    axios
      .post(
        "http://localhost:8000/api/score",
        { user_id, score },
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

  handleScoreGet() {
    axios.get("http://localhost:8000/api/scores/").then(r => {
      console.log(r);
    });
  }

  handleUserGet() {
    axios.get("http://localhost:8000/api/users/").then(r => {
      console.log(r);
    });
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
          <Button type="submit" onClick={() => this.handleUserSubmit()}>
            Submit
          </Button>
        </Form>
        <Button onClick={() => this.handleScoreGet()}>Submit Score</Button>
      </div>
    );
  }
}
