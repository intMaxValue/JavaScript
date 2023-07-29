function getInfo() {
    const input = document.getElementById('stopId');
    const baseURL = 'http://localhost:3030/jsonstore/bus/businfo/';
    let stopName = document.getElementById('stopName');
    let busesData = document.querySelector('#buses');
    let nextStop = "";
    busesData.innerHTML = "";

    fetch(`${baseURL}${input.value}`)
    .then(res => res.json())
    .then(data => {
        stopName.textContent = data.name;
        
        let busesAndTimes = Object.entries(data.buses)
        busesAndTimes.forEach(bus => {
            let li = document.createElement('li');
            let [busId, time] = bus;
            li.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busesData.appendChild(li);
        })
    })
    .catch(err => {
        stopName.textContent ='Error'
    });
}