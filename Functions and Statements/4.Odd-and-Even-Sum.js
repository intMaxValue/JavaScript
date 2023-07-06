function oddAndEvenSum(num) {
    let evenSum = 0;
    let oddSum = 0;
    let nums = [];

    numS = (""+num).split("").map(Number).map((x) => {
        if (x % 2 === 0) {
            evenSum += x;
        }
        else{
            oddSum += x;
        }
    });
    
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddAndEvenSum(1000435)