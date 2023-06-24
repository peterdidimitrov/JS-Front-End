function solve(number) {
    let stringNumber = String(number);
    let sum = 0;
    let areAllNumbersTheSame = false;
    
    if (stringNumber.length === 1) {
        areAllNumbersTheSame = true;
    }
    else {
        for (let index = 0; index < stringNumber.length - 1; index++) {
            if (stringNumber[index] === stringNumber[index + 1]) {
                areAllNumbersTheSame = true;
            }
            else {
                areAllNumbersTheSame = false;
                break;
            }
        }
    }

    while (stringNumber !== '') {
        let digit = Number(stringNumber.charAt(stringNumber.length-1));
        
        sum += digit;
        stringNumber = stringNumber.substring(0, stringNumber.length - 1);
    }

    console.log(areAllNumbersTheSame);
    console.log(sum);
}
solve(0);