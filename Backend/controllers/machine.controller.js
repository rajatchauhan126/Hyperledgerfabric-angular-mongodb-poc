const path = require('path');
const machine = require('../models/machine.model');
var moment = require('moment')

exports.test = (req, res) => {
    res.send('Greetings from the Test controller!');
}

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