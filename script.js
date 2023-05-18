//// ESTABLISH DOM THINGS ////

const button = document.getElementById(`submitButton`);
const input = document.getElementById(`textInput`);
const cityName = document.getElementById(`cityName`);
const radios = document.querySelectorAll('input[name="apiMethod"]');
const promptSpace = document.getElementById('promptSpace');
const weatherDate = document.getElementById('weatherDate');
const addData = document.getElementById('addData');
const alertBox = document.getElementById('alertBox');
const tempBox = document.getElementById('temp');

//// ESTABLISH ADDITIONAL VARIABLES ////

const apiKey = 'd7530736fc624075b0e180612231705';

let apiMethod = '';

const additionalSrcPar = {
    'current':['aqi'],
    'forecast':['days','aqi','alerts'],
    'history':['dt']
};

console.log(additionalSrcPar['forecast'][2]);


//in addition to the defualt 'q' for the location, there are additoinal parameters to be added depending on which API method chosen

//// EVENT LISTENERS ////


radios.forEach(function(radio) {
    radio.addEventListener('click', () => initialClick());
})

button.addEventListener('click', () => lookOutside());


//// FUNCTIONS ////

function initialClick() {

    //goes through the radio buttons and set apiMethod to .value of the checked button - defualt value is current as defined above
    radios.forEach(function(radio) {
        apiMethod = radio.checked ? radio.value : apiMethod ;
    })

    promptSpace.innerHTML = '';
 
    for (i=0; i<additionalSrcPar[`${apiMethod}`].length;i++) {
        if (additionalSrcPar[`${apiMethod}`][i] === 'aqi') {
            promptSpace.innerHTML += `<input type='checkbox' name='prompt' id='aqi'> <label for='aqi'> Show Air Quality</label><br>`
        } else if (additionalSrcPar[`${apiMethod}`][i] === 'alerts') {
            promptSpace.innerHTML += `<input type='checkbox' name='prompt' id='alerts'> <label for='alerts'> Show Weather Alerts</label><br>`
        } else if (additionalSrcPar[`${apiMethod}`][i] === 'days') {
            promptSpace.innerHTML += `<input type='number' name='prompt' id='days' value='1' min='1' max='10'> <label for='days'> Enter days </label><br>`
        } else if (additionalSrcPar[`${apiMethod}`][i] === 'dt') {
            promptSpace.innerHTML += `<input type='date' name='prompt' id='dt' value='2023-05-17'> <label for='dt'> Enter Desired Date (Up to One Year Ago) </label><br>`
        }
    }
    
    button.style.visibility='visible';

    ///NEED TO DISABLE THE CLICK HERE BUTTON UNTIL THIS POINT
}



async function lookOutside() {
    
    // eventually i will make additional search parameters an arguemnt passed into this function 
    // additionalSrcPar.length >=1 ? console.log('there are additional parameters') : console.log('there are no other parameters');
    const morePrompts = document.querySelectorAll('input[name="prompt"]');
    let srcPar = '';

    morePrompts.forEach(function(prompt) {
        srcPar = (prompt.id === 'aqi' && prompt.checked) ? `${srcPar}&${prompt.id}=yes` : srcPar;
        srcPar = (prompt.id === 'alerts' && prompt.checked) ? `${srcPar}&${prompt.id}=yes` : srcPar;
        srcPar = (prompt.id === 'days') ? `${srcPar}&${prompt.id}=${prompt.value}` : srcPar;
        srcPar = (prompt.id === 'dt') ? `${srcPar}&${prompt.id}=${prompt.value}` : srcPar;
    })


    console.log(`testing ${srcPar}`);
    console.log(`try ${additionalSrcPar[`${apiMethod}`]}`);


    input.value = input.value ? input.value : 'pittsburgh'; //in case nothing is entered, this will autofill with pittsburgh. Go Steelers!
    
    let response = await axios.get(`http://api.weatherapi.com/v1/${apiMethod}.json?key=${apiKey}&q=${input.value}${srcPar}`);
    console.log(response);

    ///// Now that I've extracted things - time to populate

    cityName.innerHTML = `<span id='city'>${response.data.location.name},</span><span id='country'>${response.data.location.country}</span>`;

    
    // definitly a more clean way to do this next section, but I'm on hour 6 rn and tired of starting at my screen for today so will do this quick and dirty. 

    tempBox.innerHTML = '';
    addData.innerHTML = '';
    alertBox.innerHTML = '';

    if (apiMethod === 'current') {
        weatherDate.innerHTML = `Today's Weather:`;
        tempBox.innerHTML = `<div><span class='aveTemp'>Current Temp: </span>${response.data.current.temp_c}&deg;C</div>`;
        if (srcPar.includes(`aqi=yes`)) {
            tempBox.innerHTML += `<div>US EPA Index: ${response.data.current.air_quality['us-epa-index']}</div>`;
        }
    } else if (apiMethod === 'forecast') {
        weatherDate.innerHTML = `Weather Forecast!`;

        console.log(`length of forecast ${response.data.forecast.forecastday.length}`);

        for (i=0; i<response.data.forecast.forecastday.length; i++) {
            
            let aqiData='';
            if (srcPar.includes(`aqi=yes`)) {
                aqiData= i<=3 ? `<div>US EPA Index: ${response.data.forecast.forecastday[i].day.air_quality['us-epa-index']}</div>` : '<div>No air quality data yet.'
            }
            console.log(aqiData);
           

            addData.innerHTML +=`<div class=dayBox><div class=forecastDate>${response.data.forecast.forecastday[i].date}</div><div><span class='highTemp'>Highest: </span>${response.data.forecast.forecastday[i].day.maxtemp_c}&deg;C</div><div><span class='lowTemp'>Lowest: </span>${response.data.forecast.forecastday[i].day.mintemp_c}&deg;C</div>${aqiData}</div>`
        }
        if (srcPar.includes(`alerts=yes`)) {
            let alertData='';
            alertData = response.data.alerts.alert ? `<div>Alerts: ${response.data.alerts.alert[0].headline}</div><div>${response.data.alerts.alert[0].desc}</div>` : `<div>No weather alerts.</div>`;
            alertBox.innerHTML = alertData;
        }
        
        
    } else if (apiMethod === 'history') {
        weatherDate.innerHTML = `The weather on ${response.data.forecast.forecastday[0].date}:`;
        tempBox.innerHTML = `<div><span class='highTemp'>Highest: </span>${response.data.forecast.forecastday[0].day.maxtemp_c}&deg;C</div><div><span class='lowTemp'>Lowest: </span>${response.data.forecast.forecastday[0].day.mintemp_c}&deg;C</div><div><span class='aveTemp'>Average: </span>${response.data.forecast.forecastday[0].day.avgtemp_c}&deg;C</div>`
    }


}

