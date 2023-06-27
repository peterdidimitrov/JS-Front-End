function substringString(word, text) {
    let wordToLowerCase = word.toLowerCase();
    let array = text.toLowerCase().split(' ');
    if (array.includes(wordToLowerCase)) {
        console.log(wordToLowerCase);
    } else {
        console.log(`${wordToLowerCase} not found!`);
    }
}
substringString('python', 'JavaScript is the best programming language');