const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// declaramos las rutas
router.get('/', courseController.getAllCourse);
router.post('/', courseController.createCourse);

module.exports = router;