function expensesCalculate(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let countOfBrokenHelmet = Math.floor(lostFightsCount / 2);
  let countOfBrokenSword = Math.floor(lostFightsCount / 3);
  let countOfBrokenShield = Math.floor(lostFightsCount / 6);
  let countOfBrokenArmor = Math.floor(lostFightsCount / 12);

  let expenses =
    countOfBrokenHelmet * helmetPrice +
    countOfBrokenSword * swordPrice +
    countOfBrokenShield * shieldPrice +
    countOfBrokenArmor * armorPrice;

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
expensesCalculate(23, 12.5, 21.5, 40, 200);
