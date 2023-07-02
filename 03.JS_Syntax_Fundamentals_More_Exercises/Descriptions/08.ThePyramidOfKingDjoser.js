function buildPyramid(base, increment) {
  let height = increment;

  let step = 1;
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;

  let baseArea = base * base;
  stone += (base - 2) * (base - 2);
  marble += baseArea - stone;
  stone *= increment;
  marble *= increment;

  if (base % 2 === 0) {
    while (base > 2) {
      let currentStone = 0;
      let currentLapis = 0;
      let currentMarble = 0;
      height += increment;
      step++;
      base -= 2;
      baseArea = base * base;

      if (base === 2) {
        gold = baseArea * increment;
        continue;
      }

      currentStone += (base - 2) * (base - 2);
      currentStone *= increment;
      stone += currentStone;

      if (step % 5 === 0) {
        currentLapis += baseArea - currentStone;
        currentLapis *= increment;
        lapis += currentLapis;
      } else {
        marble += baseArea - currentStone;
        currentMarble *= increment;
        marble += currentMarble;
      }
    }
  } else {
    while (base > 1) {
      let currentStone = 0;
      let currentLapis = 0;
      let currentMarble = 0;
      height += increment;
      step++;
      base -= 2;
      baseArea = base * base;

      if (base === 2) {
        gold = baseArea * increment;
        continue;
      }

      currentStone += (base - 2) * (base - 2);
      currentStone *= increment;
      stone += currentStone;

      if (step % 5 === 0) {
        currentLapis += baseArea - currentStone;
        currentLapis *= increment;
        lapis += currentLapis;
      } else {
        marble += baseArea - currentStone;
        currentMarble *= increment;
        marble += currentMarble;
      }
    }
  }
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(height)}`);
}
buildPyramid(11, 1);
