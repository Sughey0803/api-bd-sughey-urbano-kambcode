const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// declaramos las rutas
router.get('/', studentController.getAllStudent);
router.post('/', studentController.createStudent);

module.exports = router;