'use babel';

const SerialPort = require('serialport');

exports.find_serialport = function() {
    return SerialPort.list().then(
        ports => {return ports.filter(port => port.isOpen);},
        err => console.log(err)
    );
};
