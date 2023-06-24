function countStringOccurrences(text, word) {
    let array = text.split(' ');
    let occurrences = 0;
    array.forEach(element => {
        if (element === word) {
            occurrences++;
        }
    });
    console.log(occurrences);
}
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');