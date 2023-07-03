function printTheAsciiSymbols(charOne, charTwo) {
  let chars = [];
  let start = 1;
  let end = 0;

  if (charOne.charCodeAt() < charTwo.charCodeAt()) {
    start = charOne.charCodeAt();
    end = charTwo.charCodeAt();
  } else {
    start = charTwo.charCodeAt();
    end = charOne.charCodeAt();
  }

  for (let index = start + 1; index < end; index++) {
    chars.push(String.fromCharCode(index));
  }
  console.log(chars.join(" "));
}
printTheAsciiSymbols("#", ":");
