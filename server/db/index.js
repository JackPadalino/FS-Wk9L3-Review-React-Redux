const db = require('./db');
const Movie = require('./Movies');
const Genre = require('./Genres');

Movie.belongsTo(Genre);
Genre.hasMany(Movie);

module.exports = {
    db,
    Movie,
    Genre
};