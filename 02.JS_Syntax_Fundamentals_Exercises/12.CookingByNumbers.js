function solve(strNumber, operationOne, operationTwo, operationThree, operationFour, operationFive) {
    let number = Number(strNumber);
    let arrayOperations = [operationOne, operationTwo, operationThree, operationFour, operationFive];

    arrayOperations.forEach(element => {
        switch (element) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number ++;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number -= (number * 0.2);
                console.log(number);
                break;
        }
    });
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');