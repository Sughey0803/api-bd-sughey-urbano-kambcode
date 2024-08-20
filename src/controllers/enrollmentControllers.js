const Enrollment = require('../models/enrollment');
const getAllEnrollment = async (req, res) => {
    try {
        const enrollment = await Enrollment.findAll();
        res.json(enrollment);
         
    }catch(err) {
        res.status(500).json({error: 'Error al obtener inscripcion.'});
    }
};
const createEnrollment = async (req, res) => {
    try {
        const {studentId, courseId, grade} = req.body;
        const enrollment = await Enrollment.create({StudentId: studentId, CourseId: courseId, grade});
        res.status(201).json(enrollment);
         
    }catch(err) {
        res.status(500).json({error: 'Error al crear inscripcion.'});
    }
};
module.exports = {
    getAllEnrollment,
    createEnrollment,
};