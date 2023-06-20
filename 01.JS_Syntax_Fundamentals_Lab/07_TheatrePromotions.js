function solve (day, age) {
    if(age < 0 || age > 122){
        console.log("Error!");
        return;
    }
    switch (day) {
        case "Weekday":
            if (age <= 18 && age >= 0) {
                console.log("12$");
            }
            else if(age <= 64 && age > 18){
                console.log("18$");
            }
            else if(age <= 122 && age > 64){
                console.log("12$");
            }
            break;
        case "Weekend":
            if (age <= 18 && age >= 0) {
                console.log("15$");
            }
            else if(age <= 64 && age > 18){
                console.log("20$");
            }
            else if(age <= 122 && age > 64){
                console.log("15$");
            }
            break;
        case "Holiday":
            if (age <= 18 && age >= 0) {
                console.log("5$");
            }
            else if(age <= 64 && age > 18){
                console.log("12$");
            }
            else if(age <= 122 && age > 64){
                console.log("10$");
            }
            break;
    }
}
solve ('Weekday', 42);