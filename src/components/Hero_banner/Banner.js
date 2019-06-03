import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        width: "1280px",
        marginTop: "90px",
        height: "600px"
      }}
    >
      <img
        src="https://cdn-images-1.medium.com/max/1600/1*9ce5Yft8Cqg3Vt63pVGNkw.png"
        width={150}
        style={{
          paddingLeft: 100
        }}
      />
      <div
        style={{
          fontFamily: "Roboto",
          color: "white",
          fontSize: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5vh",
          paddingBottom: "30px"
        }}
      >
        $git commit -m{"  "}
        <span
          style={{
            color: "#31b3fe"
          }}
        >
          'Welcome to our Project'
        </span>
      </div>
      <div
        style={{
          fontSize: "30px",
          fontFamily: "Impact",
          fontSize: "38px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "20px"
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
            fontFamily: "Roboto",
            fontSize: "30px"
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
};

export default Banner;
