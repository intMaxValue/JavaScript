function check(num) {
    let arr = String(num).split("").map(Number); 
    for (let index = 0; index < arr.length - 1; index++) {
        

        if (arr[index] !== arr[index + 1]) {
            

            console.log('false');
            console.log(arr.reduce((total, curr) => total += curr));
            return;
        }
        
    }
    console.log('true');
    console.log(arr.reduce((total, curr) => total += curr));
}

check(2222222)