const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        dialect: 'postgres', // Corregido de 'postgress' a 'postgres'
    }
);

sequelize.authenticate() // Corregido de Sequelize.authenticate() a sequelize.authenticate()
    .then(() => console.log('Conexión a base de datos, fue exitosa'))
    .catch(err => console.error('No se pudo conectar a la base de datos:', err)); // Corregido de .cathc a .catch

module.exports = sequelize;
