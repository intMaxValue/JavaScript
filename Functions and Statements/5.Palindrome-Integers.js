function palindrome(input) {
    for (let i = 0; i < input.length; i++) {
        let curr = [];
        
        curr = (""+input[i]).split("").map(Number)
        let reversed = [...curr].reverse();
        
        if (curr.join("") === reversed.join("")) {
            console.log(true)
        }else{
            console.log(false)
        }
        
    }
}

palindrome([123,323,421,121])