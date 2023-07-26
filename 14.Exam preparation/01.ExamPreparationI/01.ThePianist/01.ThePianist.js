function solve(array) {
  const numberOfPieces = array.shift();

  let arrayOfPieces = {};

  for (let index = 0; index < numberOfPieces; index++) {
    let [piece, composer, key] = array.shift().split("|");

    arrayOfPieces[piece] = { composer, key };
  }

  array.forEach((commandString) => {
    let currentCommandArray = commandString.split("|");
    let command = currentCommandArray.shift();

    if (command === "Stop") {
      Object.entries(arrayOfPieces).forEach(([piece, info]) => {
        console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`);
      });
      return;
    }
    if (command === "Add") {
      let [piece, composer, key] = currentCommandArray;

      if (!arrayOfPieces.hasOwnProperty(piece)) {
        arrayOfPieces[piece] = { composer, key };
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      } else {
        console.log(`${piece} is already in the collection!`);
      }
    } else if (command === "Remove") {
      let piece = currentCommandArray.shift();

      if (!arrayOfPieces.hasOwnProperty(piece)) {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      } else {
        delete arrayOfPieces[piece];
        console.log(`Successfully removed ${piece}!`);
      }
    } else if (command === "ChangeKey") {
      let [piece, newKey] = currentCommandArray;

      if (!arrayOfPieces.hasOwnProperty(piece)) {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      } else {
        arrayOfPieces[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      }
    }
  });
}
solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
