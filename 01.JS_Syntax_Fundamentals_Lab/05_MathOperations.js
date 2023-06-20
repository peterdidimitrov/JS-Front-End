function solve (num1, num2, operator) {

    if (num2 === 0) {
        console.log("Can't divide by zero");
        return;
    }

    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        case '%':
            console.log(num1 % num2);
            break;
        case '**':
            console.log(num1 ** num2);
            break;
        default:
            console.log("Invalid operation");
            break;
    }
}
solve (3, 5.5, '*');