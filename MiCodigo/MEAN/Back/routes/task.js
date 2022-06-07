//Rutas para tareas

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

//api/tasks
router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);

module.exports =router;