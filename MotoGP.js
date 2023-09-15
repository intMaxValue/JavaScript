function solve(input) {
    let n = Number(input.shift());
    let riders = {};

    for (let i = 0; i < n; i++) {
        let [rider, fuelCapacity, position] = input[i].split('|');
        riders[rider] = { fuelCapacity: Number(fuelCapacity), position: Number(position) };
    }

    let commands = input.slice(n);

    for (const command of commands) {
        let [action, ...params] = command.split(' - ');

        if (action === 'StopForFuel') {
            let [rider, minFuel, changedPosition] = params;
            minFuel = Number(minFuel);
            changedPosition = Number(changedPosition);

            if (riders[rider].fuelCapacity < minFuel) {
                riders[rider].position = changedPosition;
                console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
            } else {
                console.log(`${rider} does not need to stop for fuel!`);
            }
        } else if (action === 'Overtaking') {
            let [rider1, rider2] = params;

            if (riders[rider1].position < riders[rider2].position) {
                [riders[rider1].position, riders[rider2].position] = [riders[rider2].position, riders[rider1].position];
                console.log(`${rider1} overtook ${rider2}!`);
            }
        } else if (action === 'EngineFail') {
            let [rider, lapsLeft] = params;
            lapsLeft = Number(lapsLeft);

            delete riders[rider];
            console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
        }
    }

    let sortedRiders = Object.entries(riders).sort((a, b) => a[1].position - b[1].position);

    for (const [rider, data] of sortedRiders) {
        console.log(`${rider}\n  Final position: ${data.position}`);
    }
}

// Example usage:
solve(["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"]);
