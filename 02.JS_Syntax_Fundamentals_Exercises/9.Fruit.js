function buyFruit(fruit, weightInGrams, price) {
    let weight = weightInGrams / 1000;
    let money = weight * price;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
buyFruit('apple', 1563, 2.35);