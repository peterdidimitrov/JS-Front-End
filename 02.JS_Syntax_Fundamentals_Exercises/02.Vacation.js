function solve (groupOfPeople,  typeOfTheGroup, dayOfTheWeek) {
    let price = 0;

    switch (typeOfTheGroup) {
        case 'Students':
            if (dayOfTheWeek === 'Friday') {
                price = groupOfPeople * 8.45;
            } else if (dayOfTheWeek === 'Saturday') {
                price = groupOfPeople * 9.80;
            } else if (dayOfTheWeek === 'Sunday') {
                price = groupOfPeople * 10.46;
            }
            if (groupOfPeople >= 30) {
                price = price - (price * 0.15);
            }
            break;
        case 'Business':
            let currentPrice = 0;
            if (dayOfTheWeek === 'Friday') {
                currentPrice = 10.90;
                price = groupOfPeople * currentPrice;
            } else if (dayOfTheWeek === 'Saturday') {
                currentPrice = 15.60;
                price = groupOfPeople * currentPrice;
            } else if (dayOfTheWeek === 'Sunday') {
                currentPrice = 16;
                price = groupOfPeople * currentPrice;
            }
            if (groupOfPeople >= 100) {
                price = price - 10 * currentPrice;
            }
            break;
        case 'Regular':
            if (dayOfTheWeek === 'Friday') {
                price = groupOfPeople * 15;
            } else if (dayOfTheWeek === 'Saturday') {
                price = groupOfPeople * 20;
            } else if (dayOfTheWeek === 'Sunday') {
                price = groupOfPeople * 22.50;
            }
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                price = price - (price * 0.05);
            }
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
solve (40,
    "Regular",
    "Saturday");