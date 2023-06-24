// function solve (groupOfPeople,  typeOfTheGroup, dayOfTheWeek) {
//     let price = 0;

//     switch (typeOfTheGroup) {
//         case 'Students':
//             if (dayOfTheWeek === 'Friday') {
//                 price = groupOfPeople * 8.45;
//             } else if (dayOfTheWeek === 'Saturday') {
//                 price = groupOfPeople * 9.80;
//             } else if (dayOfTheWeek === 'Sunday') {
//                 price = groupOfPeople * 10.46;
//             }
//             if (groupOfPeople >= 30) {
//                 price = price - (price * 0.15);
//             }
//             break;
//         case 'Business':
//             let currentPrice = 0;
//             if (dayOfTheWeek === 'Friday') {
//                 currentPrice = 10.90;
//                 price = groupOfPeople * currentPrice;
//             } else if (dayOfTheWeek === 'Saturday') {
//                 currentPrice = 15.60;
//                 price = groupOfPeople * currentPrice;
//             } else if (dayOfTheWeek === 'Sunday') {
//                 currentPrice = 16;
//                 price = groupOfPeople * currentPrice;
//             }
//             if (groupOfPeople >= 100) {
//                 price = price - 10 * currentPrice;
//             }
//             break;
//         case 'Regular':
//             if (dayOfTheWeek === 'Friday') {
//                 price = groupOfPeople * 15;
//             } else if (dayOfTheWeek === 'Saturday') {
//                 price = groupOfPeople * 20;
//             } else if (dayOfTheWeek === 'Sunday') {
//                 price = groupOfPeople * 22.50;
//             }
//             if (groupOfPeople >= 10 && groupOfPeople <= 20) {
//                 price = price - (price * 0.05);
//             }
//             break;
//     }

//     console.log(`Total price: ${price.toFixed(2)}`);
// }
// solve (40,
//     "Regular",
//     "Saturday");

function solve(count, type, day) {
  const prices = {
    Students: {
      Friday: 8.45,
      Saturday: 9.8,
      Sunday: 10.46,
    },
    Business: {
      Friday: 10.9,
      Saturday: 15.6,
      Sunday: 16,
    },
    Regular: {
      Friday: 15,
      Saturday: 20,
      Sunday: 22.5,
    },
  };
  let sum = 0;
  const cost = prices[type][day];

  sum = count * cost;

  if (type === "Students" && count >= 30) {
    sum -= sum * 0.15;
  } else if (type === "Business" && count >= 100) {
    sum -= cost * 10;
  } else if (type === "Regular" && count >= 10 && count <= 20) {
    sum -= sum * 0.05;
  }

  console.log(`Total price: ${sum.toFixed(2)}`);
}
solve(30, "Students", "Sunday");
