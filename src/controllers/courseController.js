const Course = require('../models/course');
const getAllCourse = async (req, res) => {
    try {
        const course = await Course.findAll();
        res.json(course);
         
    }catch(err) {
        res.status(500).json({error: 'Error al obtener los cursos.'});
    }
};
const createCourse = async (req, res) => {
    try {
        const {title, description} = req.body;
        const course = await Course.create({title, description});
        res.status(201).json(course);
         
    }catch(err) {
        res.status(500).json({error: 'Error al crear el curso.'});
    }
};
module.exports = {
    getAllCourse,
    createCourse,
};