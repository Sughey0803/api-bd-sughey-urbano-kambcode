const Student = require('../models/student');
const getAllStudent = async (req, res) => {
    try {
        const student = await Student.findAll();
        res.json(student);
         
    }catch(err) {
        res.status(500).json({error: 'Error al obtener los estudiante.'});
    }
};
const createStudent = async (req, res) => {
    try {
        const {first_name, last_name, email} = req.body;
        const student = await Student.create({first_name, last_name, email});
        res.status(201).json(student);
         
    }catch(err) {
        res.status(500).json({error: 'Error al crear estudiante.'});
    }
};
module.exports = {
    getAllStudent,
    createStudent,
};