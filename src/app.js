const express = require('express');
const studentsRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

const app = express();
// Middleware para procesar JSON
app.use(express.json());

//Configuración de las rutas
app.use('/students', studentRoutes);
app.use('/course', courseRoutes);
app.use('/enrollment', enrollmentRoutes);

//Exportación del modulo app para que pueda ser usado en index.js
module.exports = app;