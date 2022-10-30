const Sequelize = require("sequelize");
const db = require("./db");

const Genre = db.define('genre', {
    name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    }
});

module.exports = Genre;