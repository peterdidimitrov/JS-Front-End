function createMovieCatalog(array) {
  let movies = [];

  for (const line of array) {
    if (line.includes("addMovie")) {
      let name = line.slice(9);
      addMovie(name);
    } else if (line.includes("directedBy")) {
      let movieName = line.split(" directedBy ")[0];
      let directorName = line.split(" directedBy ")[1];
      addDirector(movieName, directorName);
    } else {
      let movieName = line.split(" onDate ")[0];
      let date = line.split(" onDate ")[1];
      addDate(movieName, date);
    }
  }

  let filteredMovies = movies.filter(
    (movie) =>
      movie.hasOwnProperty("name") &&
      movie.hasOwnProperty("director") &&
      movie.hasOwnProperty("date")
  );

  for (const movie of filteredMovies) {
    console.log(JSON.stringify(movie));
  }

  function addMovie(name) {
    movies.push({ name });
  }

  function addDirector(name, director) {
    let movie = movies.find((m) => m.name === name);
    if (movie) {
      movie.director = director;
    }
  }

  function addDate(name, date) {
    let movie = movies.find((m) => m.name === name);
    if (movie) {
      movie.date = date;
    }
  }
}
createMovieCatalog([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
