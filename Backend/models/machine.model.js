const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const machine = new Schema ({
    machine_name: { type: String},
    machine_id: {type: Number},
    purchase_date: {type: String},
    warrenty_date: {type: String},
    machine_brand_name: {type: String},
    machine_model_name: {type: String},
    service_detail: {
        last_service: {type: String},
        next_service: {type: String}
    },
    machine_services_list: [
        {
            last_service_date: {type: String}
        }
    ]
},
{
timestamps: true
});

module.exports = mongoose.model('machine', machine);