//Rutas para provincia

const express = require('express');
const router = express.Router();
const provinceController = require('../controllers/provinceController');

//api/provinces
router.post('/', provinceController.createProvince);
router.get('/', provinceController.getProvinces);

module.exports =router;