function circleArea(input){
    let theType = typeof(input);
    let result;

    if( theType === "number"){
        result = (Math.pow(input, 2) * Math.PI).toFixed(2);
        console.log(result)
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${theType}.`)
    }
}
