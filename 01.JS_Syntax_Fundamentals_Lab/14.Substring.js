function printSubstring (input, startIndex, count) {
    let substringText = input.substring(startIndex);
    let result = '';

    for (let index = 0; index < count; index++) {
        result += substringText[index];
    }
    console.log(result);
}
printSubstring ('ASentence', 1, 8);