const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({
    nameProvince: {
        type: String,
        required:true
    },
    nameCity: {
        type: String,
        required:true
    }
});

module.exports= mongoose.mongoose.model('City', CitySchema);