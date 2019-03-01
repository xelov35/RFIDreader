
var serialport = require("serialport");
//var portName = process.argv[2];

var portName = "COM3";

var sp = new serialport(portName,{
    baudRate:9600
});

const Readline = serialport.parsers.Readline;
const parser = new Readline;

sp.pipe(parser);

parser.on('data',onData);

function onData(data){
    console.log(data)
}
