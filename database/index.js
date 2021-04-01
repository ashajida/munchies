// Database

const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (sqlite)
module.exports = new Sequelize('blog', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

