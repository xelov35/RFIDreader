console.log("1")
serialport = require("serialport");
const EventEmitter = require('events');
class Lecture extends EventEmitter {

    constructor(serialport,sp){
        super()
        //var portName = process.argv[2];
        this.serialport =serialport;
        this.sp = sp;
       //this.emitter=new EventEmitter()
       
        console.log("e")

        //this.dataRead = "hjvcbnbnvb"
       
        
    }

    get_dataRead(){
        return this.dataRead
    }
    fakeReception() {
        setInterval(() => {
            this.emit('datta', "fake data")
        }, 2000);
    }
    readData(){
        console.log("t")
        const Readline = this.serialport.parsers.Readline;
        
        const parser = new Readline;
        
        this.sp.pipe(parser);
        
        parser.on('data',function(data){
            console.log("e")
            //this.dataRead = data
            this.emit('datta',data)

        });
        
    }

    
   
}
console.log("e")

 console.log("e")
 portName = "COM3";
 
    sp = new serialport(portName,{
            baudRate:9600
        });


x= new Lecture(serialport,sp);
//x.readData();
x.fakeReception()
x.on('datta',function(data){
    console.log("INTERFACE"  + data)
})
//var y = x.get_dataRead()
//console.log(y);