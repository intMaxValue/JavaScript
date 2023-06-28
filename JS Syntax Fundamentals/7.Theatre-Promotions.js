function getPromotion(typeOfDay, age){
    let promotion = 0;

    if (typeOfDay === "Weekday") {
        if (age >= 0 && age <= 18 ) {
            promotion = "12$"
        }
        else if (age > 18 && age <= 64 ) {
            promotion = "18$"
        }
        else if (age > 64 && age <= 122 ) {
            promotion = "12$"
        }
        else{
            promotion = "Error!"
        }
    }
    else if (typeOfDay === "Weekend") {
        if (age >= 0 && age <= 18 ) {
            promotion = "15$"
        }
        else if (age > 18 && age <= 64 ) {
            promotion = "20$"
        }
        else if (age > 64 && age <= 122 ) {
            promotion = "15$"
        }
        else{
            promotion = "Error!"
        }
    }
    else if (typeOfDay === "Holiday") {
        if (age >= 0 && age <= 18 ) {
            promotion = "5$"
        }
        else if (age > 18 && age <= 64 ) {
            promotion = "12$"
        }
        else if (age > 64 && age <= 122 ) {
            promotion = "10$"
        }
        else{
            promotion = "Error!"
        }
    }
    

    console.log(promotion);
}