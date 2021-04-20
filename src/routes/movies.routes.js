const { Router } = require("express");
const moviesCtrl = require("../controllers/movies.controller");

const router = Router();

//CRUD (Create, Read, Update, Delete)


router.get("/", moviesCtrl.getMovies);

router.post("/", moviesCtrl.createMovie);

router.get("/:id", moviesCtrl.getMoviebyId);

router.put("/:id", moviesCtrl.updateMovie);

router.delete("/:id", moviesCtrl.deleteMovie);

module.exports = router;
