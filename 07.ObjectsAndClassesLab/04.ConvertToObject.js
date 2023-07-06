function convertToJASON(jasonString) {
  let person = JSON.parse(jasonString);
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}
convertToJASON('{"name": "George", "age": 40, "town": "Sofia"}');
