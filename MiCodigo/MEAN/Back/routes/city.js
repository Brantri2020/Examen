//Rutas para ciudad

const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

//api/provincia
router.post('/', cityController.createCity);
router.get('/', cityController.getCities);
router.get('/:provinceName', cityController.getCity);

module.exports =router;