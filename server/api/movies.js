const express = require("express");
const router = express.Router();
const { Movie, Genre } = require("../db");

// GET localhost:3000/api/movies/
router.get("/", async (req, res) => {
    const movies = await Movie.findAll();

    res.send(movies);
});

// GET localhost:3000/api/movies/:id
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const movie = await Movie.findByPk(id, {
        include: [Genre]
    });

    res.send(movie);
});

module.exports = router;