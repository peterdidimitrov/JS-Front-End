function calculateThePrice(product, count) {
  let products = {
    coffee: 1.5,
    water: 1,
    coke: 1.4,
    snacks: 2,
  };

  let sum = (products[product] * count).toFixed(2);
  console.log(sum);
}
calculateThePrice("coffee", 2);
