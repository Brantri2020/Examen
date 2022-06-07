const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    endDate: {
        type: String,
        required:true
    },
    province: {
        type: String,
        required:true
    },
    city: {
        type: String,
        required:true
    },
    responsible: {
        type: String,
        required:true
    },
    status: {
        type: String,
        required:true
    },
});

module.exports= mongoose.mongoose.model('Task', TaskSchema);