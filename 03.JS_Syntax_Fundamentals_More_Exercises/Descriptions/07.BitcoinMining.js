function mineingBitcoin(input) {
  const bitcoinPrice = 11949.16;
  const goldPrice = 67.51;

  let bitcoinCount = 0;
  let day = 0;
  let money = 0;
  let daysCount = 0;

  for (let index = 0; index < input.length; index++) {
    let currentShiftGrams = input[index];
    daysCount++;

    if (daysCount % 3 === 0) {
      currentShiftGrams -= currentShiftGrams * 0.3;
    }

    money += currentShiftGrams * goldPrice;

    if (money >= bitcoinPrice) {
      let amountOfBitcoinsToBuy = Math.floor(money / bitcoinPrice);
      money -= amountOfBitcoinsToBuy * bitcoinPrice;
      bitcoinCount += amountOfBitcoinsToBuy;
      if (day === 0) {
        day = index + 1;
      }
    }
  }

  console.log(`Bought bitcoins: ${bitcoinCount}`);
  if (bitcoinCount !== 0) {
    console.log(`Day of the first purchased bitcoin: ${day}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}

mineingBitcoin([50, 100]);
mineingBitcoin([100, 200, 300]);
mineingBitcoin([3124.15, 504.212, 2511.124]);
