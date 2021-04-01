const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');

const Category = db.define('Category', {
    name: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
    isBig: {
        type: DataTypes.INTEGER,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
})

module.exports = Category;