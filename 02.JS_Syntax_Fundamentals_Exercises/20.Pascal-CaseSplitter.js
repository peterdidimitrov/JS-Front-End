function splitTheText(input) {
    let array = input.split(/(?=[A-Z])/);
    console.log(array.join(', '));
}
splitTheText('SplitMeIfYouCanHaHaYouCantOrYouCan');