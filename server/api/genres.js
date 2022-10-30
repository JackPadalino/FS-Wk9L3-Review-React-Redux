const express = require("express");
const router = express.Router();
const { Movie, Genre } = require("../db");

// GET localhost:3000/api/genres/
router.get("/", async (req, res) => {
    const genres = await Genre.findAll();

    res.send(genres);
});

// GET localhost:3000/api/genres/:id
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const genre = await Genre.findByPk(id, {
        include: [Movie]
    });

    res.send(genre);
});

module.exports = router;