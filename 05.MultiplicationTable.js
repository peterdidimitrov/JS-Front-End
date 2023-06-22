function multiplay(number) {
    for (let index = 1; index <= 10; index++) {
        let result = number * index;
        console.log(`${number} X ${index} = ${result}`);
    }
}
multiplay(5);