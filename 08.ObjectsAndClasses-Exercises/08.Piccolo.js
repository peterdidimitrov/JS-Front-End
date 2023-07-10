function solve(input) {
  let parking = [];
  input.forEach((element) => {
    let [direction, carNumber] = element.split(", ");
    if (direction === "IN") {
      if (!parking.includes(carNumber)) {
        parking.push(carNumber);
      }
    } else if (direction === "OUT") {
      if (parking.includes(carNumber)) {
        let car = parking.indexOf(carNumber);
        parking.splice(car, 1);
      }
    }
  });
  if (parking.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    console.log(parking.sort().join("\n"));
  }
}
solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
