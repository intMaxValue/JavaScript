function attachEvents() {
    let input = document.querySelector('#location');
    let getBtn = document.querySelector('#submit');
    const currConditionsURL = 'http://localhost:3030/jsonstore/forecaster/today/'
    const threeDaysURL = 'http://localhost:3030/jsonstore/forecaster/upcoming/'
    const currDiv = document.querySelector('#current');

    getBtn.addEventListener('click', getLocation);

    let locationCode = "";

    let weatherIcons = {
        Sunny : "☀",
        "Partly sunny" : "⛅",
        Overcast : "☁",
        Rain : "☂",
        Degrees : "°"
    }


    function getLocation() {
        let forecastDiv = document.querySelector('#forecast');
        forecastDiv.style.display = 'block';

    fetch ('http://localhost:3030/jsonstore/forecaster/locations')
    .then(res => res.json())
    .then((locations) => {
        locations.forEach(location => {
            if (location.name === input.value) {
                locationCode = location.code;
            }
        });

    fetch (`${currConditionsURL}${locationCode}`)
        .then(res => res.json())
        .then(curr => {
            let divForecasts = document.createElement('div');
            divForecasts.classList.add('forecasts');
            currDiv.appendChild(divForecasts);
            
            let conditionSymbol = document.createElement('span');
            conditionSymbol.classList.add('condition');
            conditionSymbol.classList.add('symbol');
            conditionSymbol.innerHTML = `${weatherIcons[curr.forecast.condition]}`
            divForecasts.appendChild(conditionSymbol);
            
            let conditionSpan = document.createElement('span');
            conditionSpan.classList.add('condition');
            divForecasts.appendChild(conditionSpan);
            
            
            conditionSpan.innerHTML = `<span class="forecast-data">${curr.name}</span>
            <span class="forecast-data">${curr.forecast.low}°/${curr.forecast.high}°</span>
            <span class="forecast-data">${curr.forecast.condition}</span>`
        })



        let upcomingDiv = document.querySelector('#upcoming');
        let forecastInfoDiv = document.createElement('div');
        forecastInfoDiv.classList.add('forecast-info');
        upcomingDiv.appendChild(forecastInfoDiv);

        fetch (`${threeDaysURL}${locationCode}`)
        .then(res => res.json())
        .then((data) => {
            data.forecast.forEach(day => {
                
                let tdForecasts = `
                <span class="upcoming">
                    <span class="symbol">${weatherIcons[day.condition]}</span>
                    <span class="forecast-data">${day.low}°/${day.high}°</span>
                    <span class="forecast-data">${day.condition}</span>
                </span>`

                forecastInfoDiv.innerHTML += tdForecasts;
            });
        })

    });
}

}

attachEvents();