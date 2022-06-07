const Province = require("../models/Province");


exports.createProvince = async (req, res) => {

    try {

      
        let province;

        province = new Province(req.body);
        await province.save();
        res.send(province);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }

}

exports.getProvinces = async (req, res) => {

    try {

        const provinces = await Province.find();
        res.json(provinces);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }

}
