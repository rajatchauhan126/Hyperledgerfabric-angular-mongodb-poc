const path = require('path');
const machine = require('../models/machine.model');
var moment = require('moment')

exports.test = (req, res) => {
    res.send('Greetings from the Test controller!');
}
//This API will save the machine for the first time.
exports.saveMachine = (req, res) => {
    let MachineDataTable = new machine(req.body);
    console.log('saveMachine');
    MachineDataTable.save((err, data) => {
        if(err) {
            res.json({code: 400, status: "Failed", data: err});
        } else 
        res.json({code : 200, status : "Success", data: data})
    })
}

//This API will update the service_detail and insert in machine_services_list in the machine object
exports.update_service_detail = (req, res) => {
    let MachineDataTable = new machine(req.body);
    console.log('saveMachine');
    
    MachineDataTable.save((err, data) => {
        if(err) {
            res.json({code: 400, status: "Failed", data: err});
        } else 
        res.json({code : 200, status : "Success", data: data})
    })
}

//This api will get all the machines
exports.getMachine = (req, res) => {
    console.log('getMachine');
    machine.find((err, data) => {
        if(err) {
            res.json({code: 400, status: "Failed", data: err});
        } else {
            res.json({code : 200, status : "Success", data: data})
        }
    })
}