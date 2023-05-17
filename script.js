const $submitButton = $(`#submitButton`)
const $datesContainer = $(`#dates-container`)
const $forecastContainer = $(`#forecast-container`)
const $astronomyContainer = $(`#astronomy-container`)

const getVal = ()=> {
    return $(`#textInput`).val()
}

$submitButton.on(`click`, async ()=>{
    console.log($(`#textInput`).val())
    await getCurrentLocation()
})

const getCurrentLocation = async () => {
    const apiGet = await axios.get(`http://api.weatherapi.com/v1/current.json?key=1e4dd6dda8bf41d59e7180806231705&q=${getVal()}&aqi=yes`)
    $(`#condition`).html(`${apiGet.data.current.condition.text}`)
    $(`#line-1`).html(`Temperature: ${apiGet.data.current.temp_f} F`)
    $(`#line-2`).html(`Feels Like: ${apiGet.data.current.feelslike_f} F`) 
    $(`#line-3`).html(`Wind Speed: ${apiGet.data.current.wind_mph} mph`) 
    $(`#line-4`).html(`Wind Degree: ${apiGet.data.current.wind_degree} °`) 
    $(`#line-5`).html(`Precipitation: ${apiGet.data.current.precip_in} in`) 
    $(`#line-6`).html(`Humidity: ${apiGet.data.current.humidity}g.m-3`)
    getForecast()  
    console.log({apiGet})
    return apiGet
}

const getForecast = async () => {
    const apiGet = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=1e4dd6dda8bf41d59e7180806231705&q=${getVal()}&days=7&aqi=no&alerts=no`)
    apiGet.data.location.name == apiGet.data.location.region ? $(`#cityName`).html(`${apiGet.data.location.name}, ${apiGet.data.location.country}`) : $(`#cityName`).html(`${apiGet.data.location.name} ${apiGet.data.location.region}, ${apiGet.data.location.country}`)
    console.log(apiGet)
    $datesContainer.html(`<h2>Dates</h2>`)
    $(`#moon-phase`).html(`Moon Phase: ${apiGet.data.forecast.forecastday[0].astro.moon_phase}`)
    $(`#sunrise`).html(`Sunrise: ${apiGet.data.forecast.forecastday[0].astro.sunrise}`)
    $(`#sunset`).html(`Sunset: ${apiGet.data.forecast.forecastday[0].astro.sunset}`)
    for (let i of apiGet.data.forecast.forecastday){
        const $date = $(`<button class="date-button"></button>`)
        $date.html(`${i.date}`)
        $datesContainer.append($date)
        $date.on(`click`, ()=>{
            if (i == apiGet.data.forecast.forecastday[0]){
                getCurrentLocation()
            } else {
                $(`#condition`).html(`${i.day.condition.text}`)
                $(`#line-1`).html(`Avg. Temperature: ${i.day.avgtemp_f}`)
                $(`#line-2`).html(`Max Temperature: ${apiGet.data.current.wind_degree} °`)
                $(`#line-3`).html(`Max Wind Speed: ${i.day.maxwind_mph} mph`) 
                $(`#line-4`).html(`Chance of Rain: ${i.day.daily_chance_of_rain}%`)  
                $(`#line-5`).html(`Precipitation: ${i.day.totalprecip_in} in`) 
                $(`#line-6`).html(`Average Humidity: ${i.day.avghumidity}g.m-3`)  
                $(`#moon-phase`).html(`Moon phase: ${i.astro.moon_phase}`)
                $(`#sunrise`).html(`Sunset: ${i.astro.sunrise}`)
                $(`#sunset`).html(`Sunrise: ${i.astro.sunset}`)
            }
        })
    }
    return apiGet
}
