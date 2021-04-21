const { $where } = require("../models/movie");
const Movie = require("../models/movie");
const moviesCtrl = {};

moviesCtrl.getMovies = async (req, res) => {
  const limit = Number(req.query.limitToFirst);
  const startAt = Number(req.query.startAt);
  const filter = {
    "genre": req.query.genre,
    "year": req.query.year,
    "title": req.query.title
  }
  var movies = await Movie.find(
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
  /*
  if(filter.genre != '') movies = movies.where('genres').in([filter.genre]);
  if(filter.year != '') movies = movies.where('year').equals(Number(filter.year));
  if(filter.title != '') movies = movies.where('title').equals(filter.title);
  
  movies = movies.skip(startAt)
  .sort({ year: -1 })
  .limit(limit);
  */
  console.log(res.json(movies));
  console.log(filter)
};


moviesCtrl.getMoviebyId = async (req, res) => {
  const id = req.params.id;
  try {
    const movie = await Movie.findById(id);
    res.send(movie);
  } catch {
    console.log("The movie does not exist");
  }
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
