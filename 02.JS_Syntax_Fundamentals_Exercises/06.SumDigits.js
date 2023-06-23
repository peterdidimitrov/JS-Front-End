function sum(number) {
    let stringNumber = String(number);
    let sum = 0;
    while (stringNumber !== '') {
        let digit = Number(stringNumber.charAt(stringNumber.length-1));
        stringNumber = stringNumber.substring(0, stringNumber.length - 1);
        sum += digit;
    }
    console.log(sum);
}
sum (543);