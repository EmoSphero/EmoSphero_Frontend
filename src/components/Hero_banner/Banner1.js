import React, { Component } from "react";
export default class Banner extends Component {
  render() {
    return (
      <div>
        <img
          src="https://cdn-images-1.medium.com/max/1600/1*9ce5Yft8Cqg3Vt63pVGNkw.png"
          width={150}
          style={{
            paddingLeft: 100
          }}
        />
        <div>$git commit -m 'Welcome to our Project'</div>
        <div
          style={{
            fontSize: "30px"
          }}
        >
          EmoSpherO
        </div>
        <div>
          <p
            style={{
              color: "#31b3fe",
              fontSize: "15px",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(75%, -10%)"
            }}
          >
            render{" "}
            <span
              style={{
                color: "#fff"
              }}
            >
              (
            </span>
            <p
              style={{
                color: "#bb5cfe",
                marginLeft: "10px"
              }}
            >
              return{" "}
              <span
                style={{
                  color: "#fff"
                }}
              >
                (
              </span>
              <p
                style={{
                  color: "#d35a6b",
                  marginLeft: "15px"
                }}
              >
                <span
                  style={{
                    color: "#fff"
                  }}
                >
                  {"<"}
                  <span
                    style={{
                      color: "#e46866"
                    }}
                  >
                    View
                  </span>
                  <span
                    style={{
                      color: "#fff"
                    }}
                  >
                    {">"}
                  </span>
                  <p
                    style={{
                      color: "#fff",
                      marginLeft: "20px"
                    }}
                  >
                    {"<"}
                    <span
                      style={{
                        color: "#e46866"
                      }}
                    >
                      ProjectDetails
                    </span>
                    <span
                      style={{
                        color: "#fff"
                      }}
                    >
                      {">"}
                    </span>
                    <span
                      style={{
                        color: "#fff"
                      }}
                    >
                      Yo yo yyo this is our project
                    </span>
                    <span
                      style={{
                        color: "#fff"
                      }}
                    >
                      {"</"}
                      <span
                        style={{
                          color: "#e46866"
                        }}
                      >
                        ProjectDetails
                      </span>
                      <span
                        style={{
                          color: "#fff"
                        }}
                      >
                        {">"}
                      </span>
                    </span>
                  </p>
                </span>
              </p>
            </p>
          </p>
        </div>
      </div>
    );
  }
}
