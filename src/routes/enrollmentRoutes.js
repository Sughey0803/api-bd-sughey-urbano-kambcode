const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

// declaramos las rutas
router.get('/', enrollmentController.getAllEnrollment);
router.post('/', enrollmentController.createEnrollment);

module.exports = router;
