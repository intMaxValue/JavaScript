function radar(speed, area) {
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    let diff = 0;

    if (area === 'motorway') {
        if (speed <= motorwayLimit) {
            console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`)
        }
        else{
            diff = speed - motorwayLimit;
            let speeding = speedingCheck(diff)

            console.log(`The speed is ${speed - motorwayLimit} km/h faster than the allowed speed of ${motorwayLimit} - ${speeding}`)
        }
    }
    else if (area === 'interstate') {
        if (speed <= interstateLimit) {
            console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`)
        }
        else{
            diff = speed - interstateLimit;
            let speeding = speedingCheck(diff)

            console.log(`The speed is ${speed - interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - ${speeding}`)
        }
    }
    else if (area === 'city') {
        if (speed <= cityLimit) {
            console.log(`Driving ${speed} km/h in a ${cityLimit} zone`)
        }
        else{
            diff = speed - cityLimit;
            let speeding = speedingCheck(diff)

            console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - ${speeding}`)
        }
    }
    else if (area === 'residential') {
        if (speed <= residentialLimit) {
            console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`)
        }
        else{
            diff = speed - residentialLimit;
            let speeding = speedingCheck(diff)

            console.log(`The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - ${speeding}`)
        }
    }

    function speedingCheck(diff){
        let result = "";

        if (diff <= 20) {
            result = "speeding";
        }else if (diff > 20 && diff <= 40) {
            result = "excessive speeding";
        }else if (diff > 40) {
            result = "reckless driving";
        }

        return result;
    }
}

