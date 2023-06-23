function sortTheNames(array) {
    let sortedArray = array.sort((a,b)=>a-b);
    let sortedArrayLength = array.length;
    

    let newArray = [];

    let loops = 0;

    if (sortedArrayLength % 2 === 0) {
        loops = sortedArrayLength / 2;
    } else {
        loops = sortedArrayLength / 2 - 0.5;
    }

    for (let index = 0; index < loops; index++) {   
        let first = sortedArray.shift();
        let second = sortedArray.pop();

        newArray.push(first);
        newArray.push(second);
    }
    if (sortedArrayLength % 2 !== 0) {
        let lastElement = sortedArray.pop();

        newArray.push(lastElement);
    }
    return newArray;
}
sortTheNames([1,
    65,
    3,
    52,
    48,
    63,
    31,
    -3,
    18,
    56]);