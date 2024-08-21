const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Declaramos las rutas
router.get('/', studentController.getAllStudents); // Cambié a "getAllStudents" para reflejar que se espera una lista
router.post('/', studentController.createStudent);

module.exports = router;
