function reverseAnArray (n, array) {
    let newArray = [];
    for (let index = n - 1; index >= 0; index--) {
        newArray.push(array[index]);
    }
    // let newArray = array.slice(0, n).reverse().join(' '); //another way
    console.log(newArray.join(' '));
}
reverseAnArray (2, [66, 43, 75, 89, 47]);