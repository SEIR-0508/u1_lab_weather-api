const apiKey = 'http://api.weatherapi.com/v1/current.json?key=52da1b624dc843c880c180718231705 &q=Toronto&aqi=no'
const button = document.querySelector('#submitButton')
const input = document.querySelector('#textInput')
const headingOne = document.querySelector('#city')
const headingTwo = document.querySelector('#region')
const countryy = document.querySelector('#country')
const timee = document.querySelector('#time')
const latitude = document.querySelector('#lat')
const conditionn = document.querySelector('#condition')
const image = document.querySelector('#condition-icon')
const windText = document.querySelector('#wind')
const feelsLikeText = document.querySelector('#feelsLike-c')
const feelsLikeText_f = document.querySelector('#feelsLike-f')
const container = document.querySelector('#container')


button.addEventListener('click', async() => {
    let weat = textInput.value
    console.log(weat)
    let response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=52da1b624dc843c880c180718231705&q=${weat}&aqi=no`
    )
   let cityy = response.data.location.name;
     console.log(cityy)
   headingOne.innerText = cityy
   
   let  region = response.data.location.region;
     console.log(region)
   headingTwo.innerText = region
 
   let where = response.data.location.country
       console.log(where)
    countryy.innerHTML = where

    let when = response.data.location.localtime
    console.log(when)
    timee.innerText = when

    let latt = response.data.location.lat
    console.log(latt)
    latitude.innerHTML = latt

    let consiti = response.data.current.condition.text
    console.log(consiti)
    conditionn.innerHTML = consiti

    let icon = response.data.current.condition.icon
    console.log(icon)
    image.src = icon

    let wind = response.data.current.wind_mph
    console.log(wind)
    windText.innerHTML = wind

    let feelc = response.data.current.feelslike_c
    console.log(feelc)
    feelsLikeText.innerHTML = feelc

    let feelf = response.data.current.feelslike_f
    console.log(feelf)
    feelsLikeText_f.innerHTML = feelf
        
})
