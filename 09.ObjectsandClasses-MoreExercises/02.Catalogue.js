function createCatalogue(input) {
  let catalogue = input.reduce((acc, curr) => {
    const [name, price] = curr.split(" : ");
    acc.push({ name, price });
    return acc;
  }, []);

  catalogue.sort((a, b) => a.name.localeCompare(b.name));

  let letter;
  for (const product of catalogue) {
    let currentLetter = product.name[0][0].toUpperCase();
    if (currentLetter !== letter) {
      letter = product.name.charAt(0).toUpperCase();
      console.log(letter);
    }
    console.log(`  ${product.name}: ${product.price}`);
  }
}
createCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
