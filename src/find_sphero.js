const SerialPort = require("serialport");

exports.find_serialport = function() {
  return SerialPort.list().then(
    ports => {
      return ports.filter(port => port.comName.includes("Sphero")).pop()
        .comName;
    },
    err => console.log(err)
  );
};
