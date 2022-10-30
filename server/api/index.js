const express = require("express");
const router = express.Router();

router.use("/movies", require("./movies"));
router.use("/genres", require("./genres"));

module.exports = router;