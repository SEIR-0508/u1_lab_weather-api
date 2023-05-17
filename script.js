//// ESTABLISH DOM THINGS ////

const button = document.getElementById(`submitButton`);
const input = document.getElementById(`textInput`);
const cityName = document.getElementById(`cityName`);
const temp = document.getElementById(`temp`);
const radios = document.querySelectorAll('input[name="apiMethod"]');
const promptSpace = document.getElementById('promptSpace');
const addData = document.getElementById('addData');

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
            promptSpace.innerHTML += `<input type='checkbox' name='prompt' id='aqi'> <label for='aqi'> Show Air Quality? </label><br>`
        } else if (additionalSrcPar[`${apiMethod}`][i] === 'alerts') {
            promptSpace.innerHTML += `<input type='checkbox' name='prompt' id='alerts'> <label for='alerts'> Show Weather Alerts? </label><br>`
        } else if (additionalSrcPar[`${apiMethod}`][i] === 'days') {
            promptSpace.innerHTML += `<input type='number' name='prompt' id='days' value='1' min='1'> <label for='days'> Enter days </label><br>`
        } else if (additionalSrcPar[`${apiMethod}`][i] === 'dt') {
            promptSpace.innerHTML += `<input type='date' name='prompt' id='dt' value='2023-05-17'> <label for='dt'> Enter Desired Date (Up to One Year Ago) </label><br>`
        }
    }
    
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
    
    let response = await axios.get(`http://api.weatherapi.com/v1/${apiMethod}.json?key=${apiKey}&q=${input.value}${srcPar}`);
    console.log(response);

    ///// Now that I've extracted things - time to populate

    cityName.innerHTML = response.data.location.name;
    temp.innerHTML = `${response.data.current.temp_c}&deg;C`;




}

