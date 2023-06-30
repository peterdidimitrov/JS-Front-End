function extractsAllWords(input) {
  let matches = input
    .toUpperCase()
    .split(/[\W]+/)
    .filter((w) => w.length >= 1)
    .join(", ");

  console.log(matches);
}
extractsAllWords("Hi, how are you?");
