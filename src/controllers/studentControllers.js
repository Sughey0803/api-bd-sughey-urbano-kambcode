const Student = require('../models/student');

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll(); // Cambié el nombre a "students" para reflejar que es una lista
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los estudiantes.' }); // Cambié "estudiante" a "estudiantes" para que esté en plural
    }
};

const createStudent = async (req, res) => {
    try {
        const { first_name, last_name, email } = req.body;
        const student = await Student.create({ first_name, last_name, email });
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el estudiante.' }); // Agregué "el" para mayor claridad
    }
};

module.exports = {
    getAllStudents, // Cambié el nombre para mantener consistencia
    createStudent,
};
