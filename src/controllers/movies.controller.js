const { $where } = require("../models/movie");
const Movie = require("../models/movie");
const moviesCtrl = {};

moviesCtrl.getMovies = async (req, res) => {
  
  const limit = Number(req.query.limitToFirst);
  const startAt = Number(req.query.startAt);
  const movies = await Movie.find(
    {
        year: { $type: "int"},
        countries: { $exists: true, $ne: [] },
        genres: { $exists: true, $ne: [] },
        directors: { $exists: true, $ne: [] }
    },
    {
      title: 1,
      year: 1,
      countries: 1,
      genres: 1,
      directors: 1,
      imdb: 1,
    }
  )  
  .skip(startAt)
  .sort({ year: -1 })
  .limit(limit);

  console.log(res.json(movies))
  console.log("Sin filter")

};

moviesCtrl.getMoviesFiltered = async (req, res) => {
  
  const limit = Number(req.query.limitToFirst);
  const startAt = Number(req.query.startAt);
  const filter = {
    "genre": req.query.genre,
    "year": Number(req.query.year),
    "title": req.query.title
  }
  
  const movies = await Movie.find(
    {
      year: { $type: "int"},
      countries: { $exists: true, $ne: [] },
      genres: { $exists: true, $ne: [] },
      directors: { $exists: true, $ne: [] },
      title: { $regex: new RegExp("^" + filter.title.toLowerCase(), "i")},

    },
    {
      title: 1,
      year: 1,
      countries: 1,
      genres: 1,
      directors: 1,
      imdb: 1,
    }
  )
  .skip(startAt)
  .sort({ year: -1 })
  .limit(limit);
  console.log(res.json(movies));
  console.log("Filter llamado")
};


moviesCtrl.getMoviebyId = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const movie = await Movie.findById(id);
    res.send(movie);
  } catch {
    console.log("The movie does not exist");
  }
  console.log("GetMovieByID llamado")
};

moviesCtrl.createMovie = (req, res) => {
  /*
    const newMovie = new Movie(req.body);
    await newMovie.save();

    res.send({message: 'Employee created'})
    */

  res.send({ message: "We dont accept create new movies" });
};

moviesCtrl.updateMovie = (req, res) => {
  /*
    const newMovie = new Movie(req.body);
    await Movie.findByIdAndUpdate(req.params.id, newMovie);

    res.send(newMovie)

    */
  res.send({ message: "We dont accept update movies" });
};

moviesCtrl.deleteMovie = (req, res) => {
  /*

    await Movie.findByIdAndDelete(req.params.id);
    res.send({message: "The movie was deleted"});

    */
  res.send({ message: "We dont accept delete movies" });
};

const hello = (req, res) => res.send("hello");

module.exports = moviesCtrl;
