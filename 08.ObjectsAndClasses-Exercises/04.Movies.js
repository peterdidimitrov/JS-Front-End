function createMovieCatalog(input) {
  let movieCatalog = [];

  input.forEach((command) => {
    if (command.includes("addMovie")) {
      const [_, name] = command.split("addMovie ");
      movieCatalog.push({
        name,
      });
    } else if (command.includes("directedBy")) {
      const [movieName, directorName] = command.split(" directedBy ");
      const movie = movieCatalog.find((m) => m.name === movieName);
      if (movie) {
        movie.director = directorName;
      }
    } else if (command.includes("onDate")) {
      const [movieName, date] = command.split(" onDate ");
      const movie = movieCatalog.find((m) => m.name === movieName);
      if (movie) {
        movie.date = date;
      }
    }
  });
  movieCatalog
    .filter((m) => m.name && m.director && m.date)
    .forEach((m) => console.log(JSON.stringify(m)));
}
createMovieCatalog([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
