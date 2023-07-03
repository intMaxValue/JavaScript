function getAge(age){
    if(age >= 0 && age <= 2){
        return "baby"
    }
    if(age >= 3 && age <= 13){
        return "child"
    }
    if(age >= 14 && age <= 19){
        return "teenager"
    }
    if(age >= 20 && age <= 65){
        return "adult"
    }
    if(age >= 66){
        return "elder"
    }
    else{
        return "out of bounds"
    }
}

console.log(getAge(99));