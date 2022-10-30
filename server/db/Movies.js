const Sequelize = require("sequelize");
const db = require("./db");

const Movie = db.define('movie', {
    name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    runtime: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

module.exports = Movie;