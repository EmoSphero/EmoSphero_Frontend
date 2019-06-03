const sphero = require("./lib/sphero");
const find_sphero = require("./find_sphero");
let newDirection = "?";
let previousDirection, controller;
const exports = (module.exports = {});

const LEFT = "LEFT";
const RIGHT = "RIGHT";
const UP = "UP";
const DOWN = "DOWN";
const FORWARD = "FORWARD";
const BACKWARD = "BACKWARD";

// `ls /dev/tty.Sphero*`
// const spheroBall = new sphero("/dev/tty.Sphero-PYP-AMP-SPP");
// MSB FIXME : probably want to remove a lot of this logging...
let spheroBall;
find_sphero.find_serialport().then(
  port => {
    console.log(port);
    if (port.length === 0) {
      console.log("No serial ports found??");
    } else {
      console.log("Found sphero on {port.0}");
      spheroBall = new sphero(port);
    }
  },
  err => {
    console.log("Problem finding sphero??");
  }
);

exports.spheroModule = () => {
  console.log("sm");
  return initConnections();
};

const initConnections = () => {
  console.log("Waiting for Sphero connection...");

  return spheroBall.connect(() => {
    console.log("Connected to Sphero");
  });
};

exports.green = () => {
  spheroBall.color("#339F13");
};

exports.pink = () => {
  spheroBall.color("ff69b4");
  console.log("Hello Pink");
};
exports.blue = () => {
  spheroBall.color("blue");
};
exports.red = () => {
  spheroBall.color("red");
  console.log("Hello Red");
};

exports.moveSphero = direction => {
  switch (direction) {
    case LEFT:
      //sphero.roll(speed, heading, state, option). Heading is expressed in degrees.
      spheroBall.roll(100, 90, 1);
      break;
    case RIGHT:
      spheroBall.heading = 90;
      spheroBall.roll(100, 90, 1);
      break;
    case UP:
      stopSphero(spheroBall);
      break;
    case DOWN:
      stopSphero(spheroBall);
      break;
    case FORWARD:
      spheroBall.roll(100, 0, 1);
      break;
    case BACKWARD:
      spheroBall.heading = 180;
      spheroBall.roll(100, 180, 1);
      break;
    default:
      stopSphero(spheroBall);
  }
};
exports.random = () => {
  spheroBall.connect(function() {
    // roll orb in a random direction, changing direction every second
    setInterval(function() {
      var direction = Math.floor(Math.random() * 360);
      spheroBall.roll(150, direction);
    }, 1000);
  });
};

exports.stopSphero = spheroBall => {
  spheroBall.roll(0, spheroBall.heading || 0, 0);
};
