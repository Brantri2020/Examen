const City = require("../models/City");


exports.createCity = async (req, res) => {

    try {

      
        let city;

        city = new City(req.body);
        await city.save();
        res.send(city);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }

}

exports.getCities = async (req, res) => {

    try {

        const cities = await City.find();
        res.json(cities);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }

}

exports.getCity = async (req, res) => {

    try {

        console.log(req.params.provinceName);
        let provinceSelected = await City.find({ "nameProvince": req.params.provinceName});

        if(!provinceSelected){
            res.status(404).json({msg:'The province doesnt exist'});
        }

        listCity=[]

        provinceSelected.forEach(doc => {
            
            listCity.push(doc.nameCity);
        });
        

        res.json(listCity);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }

}
