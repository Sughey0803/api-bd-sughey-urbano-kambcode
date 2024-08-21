const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: 'students',  // Opcional: Especifica el nombre de la tabla en la base de datos
    timestamps: false       // Desactiva createdAt y updatedAt
});

module.exports = Student;
