function solve (array) {
    let sumOfEvenNumner = 0; 
    let sumOfOddNumber = 0;
    for (let index = 0; index < array.length; index++) {
        
        if (array[index] % 2 === 0) {
            sumOfEvenNumner += array[index];
        }
        else
        {
            sumOfOddNumber += array[index];
        }    

    }
    console.log(sumOfEvenNumner - sumOfOddNumber);
}
solve ([2,4,6,8,10]);