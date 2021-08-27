var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var os = require('os');

var app = express();

var machineinfo = {
    "Host" : "",
    "IPAddress" : "",
    "Home Directory" : "",
    "Total Memory" : "",
    "Free Memory" : "",
    "OS Platform": "",
    "OS Archtecture" : "",
    "CPUS" : "",

}

/////////////////////////////////////////////////////////////////////////////
// Body Parsing Code
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
////////////////////////////////////////////////////////////////////////////

app.route('/hostmachine').get(cors(),function(req,res) {
    getallmachinedetail();
    res.send(machineinfo);
});

function getallmachinedetail()
{
    // Machine Detail
    machineinfo["Host"] = os.hostname();
    // Network Detail
    var netdetail = os.networkInterfaces();
    machineinfo["IPAddress"] = netdetail;
    machineinfo["Home Directory"] = os.homedir();
    machineinfo["Total Memory"] = os.totalmem().toString();
    machineinfo["Free Memory"] = os.freemem().toString();
    machineinfo["OS Platform"] = os.platform();
    machineinfo["OS Archtecture"] = os.arch();
    machineinfo["CPUS"] = os.cpus();
    console.log("Teku");
}

var server = app.listen(3001,function(){
    //console.log("Server started");
});
