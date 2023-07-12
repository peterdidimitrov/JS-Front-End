function printTheCurrentParkingState(input) {
  const parking = new Set();
  input.forEach((element) => {
    let [direction, carNumber] = element.split(", ");
    if (direction === "IN") {
      parking.add(carNumber);
    } else if (direction === "OUT") {
      if (parking.has(carNumber)) {
        parking.delete(carNumber);
      }
    }
  });
  if (parking.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    console.log(Array.from(parking).sort().join("\n"));
  }
}
printTheCurrentParkingState([
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
