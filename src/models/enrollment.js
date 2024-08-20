const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const Student = require('./student.js');
const Course = require('./course.js');

const Enrollment = sequelize.define('Enrollment', {
    grade: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
});

Student.belongsToMany(Course, { through:Enrollment });
Course.belongsToMany(Student, { through:Enrollment });
module.exports = Enrollment;
