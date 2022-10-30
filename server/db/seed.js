const db = require("./db");
const { Movie, Genre } = require("./");

const getRandomRuntime = () => {
    return Math.floor(50000 + Math.random() * 100000);
}

const genres = [
    { name: "horror" },
    { name: "family" },
]

const movies = [{
    name: "Finding Nemo",
    runtime: getRandomRuntime()
}, {
    name: "Scream",
    runtime: getRandomRuntime()
}, {
    name: "Halloween",
    runtime: getRandomRuntime()
}, {
    name: "Texas Chainsaw",
    runtime: getRandomRuntime()
}, {
    name: "Alien",
    runtime: getRandomRuntime()
}, {
    name: "Mario",
    runtime: getRandomRuntime()
}, {
    name: "Ghost Busters",
    runtime: getRandomRuntime()
}, {
    name: "Hair",
    runtime: getRandomRuntime()
}, {
    name: "Tusk",
    runtime: getRandomRuntime()
}]

const seed = async () => {
    // Clear out any old data
    await db.sync({ force: true });

    console.log("CREATING MOVIES...")
    const [movie1, movie2, movie3] = await Promise.all(movies.map((movieData) => Movie.create(movieData)));
    console.log("DONE CREATING MOVIES...");

    console.log("CREATING GENRES...")
    const [genre1, genre2] = await Promise.all(genres.map((genreData) => Genre.create(genreData)));
    console.log("DONE CREATING GENRES...");

    genre1.addMovies([movie1]);
    genre2.addMovies([movie2, movie3]);

    console.log("DONE RUNNING SEED...");
};

seed();