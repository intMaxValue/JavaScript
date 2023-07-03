function printAndSum(x, y) {
    let nums = [];
    let sum = 0;

    for (let index = x; index <= y; index++) {
        nums.push(index);
        sum += index;
    }

    console.log(nums.join(" "))
    console.log(`Sum: ${sum}`)
}
