function storeStocking(arrayOne, arrayTwo) {
  let products = {};
  let arr = [];
  arrayOne.forEach((element) => arr.push(element));
  arrayTwo.forEach((element) => arr.push(element));

  for (let index = 0; index < arr.length; index += 2) {
    let productName = arr[index];
    let produvtAmount = Number(arr[index + 1]);
    if (index % 2 === 0) {
      if (products[productName] === undefined) {
        products[productName] = produvtAmount;
      } else {
        products[productName] += produvtAmount;
      }
    }
  }

  Object.entries(products).forEach(([product, amount]) =>
    console.log(`${product} -> ${amount}`)
  );
}
storeStocking(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
