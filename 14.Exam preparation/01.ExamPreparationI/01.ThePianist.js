function solve(array) {
  const numberOfPieces = array.shift();

  let arrayOfPieces = [];

  for (let index = 0; index < numberOfPieces; index++) {
    const currentPieceArray = array[index].split("|");

    arrayOfPieces.push({
      piece: currentPieceArray[0],
      composer: currentPieceArray[1],
      key: currentPieceArray[2],
    });
  }
  array.slice(0, numberOfPieces);
  array.forEach((commandString) => {
    const currentCommandArray = commandString.split("|");

    const command = currentCommandArray[0];
    const currеntPiece = currentCommandArray[1];

    if (command === "Stop") {
      arrayOfPieces.forEach((objectPiece) => {
        console.log(
          `${objectPiece.piece} -> Composer: ${objectPiece.composer}, Key: ${objectPiece.key}`
        );
      });
      return;
    }
    if (command === "Add") {
      const result = arrayOfPieces.find(({ piece }) => piece === currеntPiece);

      if (result) {
        console.log(`${currеntPiece} is already in the collection!`);
      } else {
        const composer = currentCommandArray[2];
        const key = currentCommandArray[3];
        let newPiece = {
          piece: currеntPiece,
          composer: composer,
          key: key,
        };
        arrayOfPieces.push(newPiece);
        console.log(
          `${currеntPiece} by ${composer} in ${key} added to the collection!`
        );
      }
    } else if (command === "Remove") {
      const result = arrayOfPieces.find(({ piece }) => piece === currеntPiece);

      if (result) {
        for (let i = 0; i < arrayOfPieces.length; i++) {
          if (arrayOfPieces[i] === result) {
            console.log(`Successfully removed ${arrayOfPieces[i].piece}!`);
            arrayOfPieces.splice(i, 1);
            break;
          }
        }
      } else {
        console.log(
          `Invalid operation! ${currеntPiece} does not exist in the collection.`
        );
      }
    } else if (command === "ChangeKey") {
      const key = currentCommandArray[2];
      const result = arrayOfPieces.find(({ piece }) => piece === currеntPiece);
      if (result === undefined) {
        console.log(
          `Invalid operation! ${currеntPiece} does not exist in the collection.`
        );
      } else {
        arrayOfPieces[arrayOfPieces.indexOf(result)].key = key;
        console.log(`Changed the key of ${currеntPiece} to ${key}!`);
      }
    }
  });
}
solve([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Remove|Turkish March",
  "ChangeKey|Turkish March|C#",
  "Stop",
]);
