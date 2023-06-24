function rotateTheArray(array, rotations) {
    for (let index = 1; index <= rotations; index++){
        let firstElement = array.shift();
        array.push(firstElement);
    }
    console.log(array.join(' '));
}
rotateTheArray([32, 21, 61, 1], 4);