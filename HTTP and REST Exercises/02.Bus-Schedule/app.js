function solve() {
    const info = document.querySelector('.info');
    const [departBtn, arriveBtn] = Array.from(document.querySelectorAll('input[type=button]'));
    let nextStop = 'depot';
    let currentStop = "";
    const baseURL = 'http://localhost:3030/jsonstore/bus/schedule/'


    function depart() {
        departBtn.disabled = true;
        arriveBtn.disabled = false;

        fetch (`${baseURL}${nextStop}`)
        .then((res) => res.json())
        .then(data => {
            nextStop = data.next;
            currentStop = data.name;
            info.textContent = `Next stop ${data.name}`;
        })
        .catch((err) => {
            info.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        });
    }

    async function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;

        info.textContent = `Arriving at ${currentStop}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();