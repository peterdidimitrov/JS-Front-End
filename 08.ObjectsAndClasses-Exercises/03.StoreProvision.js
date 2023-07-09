function storeStocking(arrayOne, arrayTwo) {
  //arrayOne.concate(arrayTwo);
  let arr = [...arrayOne, ...arrayTwo];

  let products = arr.reduce((acc, curr, i) => {
    if (i % 2 !== 0) {
      return acc;
    }
    if (!acc.hasOwnProperty(curr)) {
      acc[curr] = 0;
    }
    acc[curr] += Number(arr[i + 1]);
    return acc;
  }, {});

  Object.entries(products).forEach(([product, amount]) =>
    console.log(`${product} -> ${amount}`)
  );
}
storeStocking(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
