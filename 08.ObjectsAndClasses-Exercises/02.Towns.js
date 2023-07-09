//using reduce
function printTheTownsInfo(array) {
  array
    .reduce((acc, curr) => {
      const [town, lat, lon] = curr.split(" | ");

      const latitude = Number(lat).toFixed(2);
      const longitude = Number(lon).toFixed(2);

      acc.push({ town, latitude, longitude });

      return acc;
    }, [])
    .forEach((t) => console.log(t));
}
printTheTownsInfo([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);

//using map
function printTheTowns(array) {
  array
    .map((city) => {
      let [town, latitude, longitude] = city.split(" | ");

      latitude = Number(latitude).toFixed(2);
      longitude = Number(longitude).toFixed(2);

      return { town, latitude, longitude };
    })
    .forEach((t) => console.log(t));
}
printTheTowns([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);