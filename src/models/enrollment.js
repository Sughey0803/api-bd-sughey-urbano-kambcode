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

// Establecer relaciones muchos a muchos entre Student y Course a través de Enrollment
Student.belongsToMany(Course, { through: Enrollment, foreignKey: 'studentId' });
Course.belongsToMany(Student, { through: Enrollment, foreignKey: 'courseId' });

module.exports = Enrollment;
