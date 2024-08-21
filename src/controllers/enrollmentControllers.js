const Enrollment = require('../models/enrollment');

const getAllEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.findAll(); // Cambié el nombre a "enrollments" para mayor claridad
        res.json(enrollments);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener inscripciones.' }); // Cambié el mensaje para que esté en plural
    }
};

const createEnrollment = async (req, res) => {
    try {
        const { studentId, courseId, grade } = req.body;
        const enrollment = await Enrollment.create({ studentId, courseId, grade }); // Usar "studentId" y "courseId" directamente en lugar de "StudentId" y "CourseId"
        res.status(201).json(enrollment);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear inscripción.' });
    }
};

module.exports = {
    getAllEnrollments, // Cambié el nombre para mantener consistencia
    createEnrollment,
};
