import React from "react";
import { Grid, Image } from "semantic-ui-react";

const StackHome = () => {
  return (
    <div className="stack_wrapper">
      <div className="container">
        <h1> Tech Stack </h1>
        <p> What we used to build this application</p>
        <div>
          <Grid
            relaxed="very"
            columns={4}
            style={{
              marginLeft: "20px"
            }}
          >
            <Grid.Column>
              <i className="devicon-atom-original" />
            </Grid.Column>
            <Grid.Column>
              <i className="devicon-python-plain" />
            </Grid.Column>
            <Grid.Column>
              <i className="devicon-react-original-wordmark" />
            </Grid.Column>
            <Grid.Column>
              <i className="devicon-mongodb-plain" />
            </Grid.Column>
          </Grid>
          <Grid
            relaxed="very"
            columns={4}
            style={{
              marginLeft: "20px"
            }}
          >
            <Grid.Column>
              <i className="devicon-html5-plain-wordmark" />
            </Grid.Column>
            <Grid.Column>
              <i className="devicon-css3-plain-wordmark" />
            </Grid.Column>
            <Grid.Column>
              <i className="devicon-javascript-plain" />
            </Grid.Column>
            <Grid.Column>
              <i className="devicon-nodejs-plain" />
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default StackHome;
