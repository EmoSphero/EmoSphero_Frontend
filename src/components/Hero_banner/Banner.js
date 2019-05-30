import React, { Component } from "react";
import Untitled from "../../Resources/images/Untitled.png";
export default class Banner extends Component {
  render() {
    return (
      <div>
        <div
          className="img_cover"
          style={{
            width: "200px",
            height: "200px",
            background: `url(${Untitled}) no-repeat`
          }}
        />
      </div>
    );
  }
}
