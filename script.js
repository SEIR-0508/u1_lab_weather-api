
const key = "c2d4d4e104f64534880174505231705"
const button1 = document.querySelector("#submitButton")
const button2 = document.querySelector("#more")
const moretext = document.querySelectorAll(".more")                                                                             
const backcolor = document.querySelector("body")
 
function reset(){
    for (let i = 0; i < moretext.length; i++) {
        moretext[i].innerText = "";
    }
   
}

button1.addEventListener('click', async () => {
    
    
    
    let input = document.querySelector("#textInput").value                                                                               
    let simple = document.querySelector("#simple")
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${input}&aqi=no`)

    let city = response.data.location.name
    let state = response.data.location.region
    let count = response.data.location.country
    let tempf = response.data.current.temp_f
    let tempc = response.data.current.temp_c
    let cond = response.data.current.condition.text

        
        if(count !== "United States of America") {
            simple.innerHTML = `It is ${tempc}\u00B0 C and ${cond} in ${city}, ${count}.`
        }else{
            simple.innerHTML = `It is ${tempf}\u00B0 F and ${cond} in ${city}, ${state}.`
        }
       
        button2.style.opacity = 1;
        reset();
    button2.addEventListener('click', async () => {
        
        let clock = document.querySelector("#time")
        let humid = document.querySelector("#humid")
        let wind = document.querySelector("#wind")
        let precip = document.querySelector("#precip")
        let alttemp = document.querySelector("#alttemp") 
        let response2 = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${input}&days=1&aqi=no&alerts=no`)
        
        let humidity = response2.data.current.humidity     
        let windspeed = response2.data.current.wind_mph
        let windspeedalt = response2.data.current.wind_kph
        let rainch = response2.data.forecast.forecastday[0].day.daily_chance_of_rain
        let snowch = response2.data.forecast.forecastday[0].day.daily_chance_of_snow
        
            if(count !== "United States of America") {
                alttemp.innerHTML = `Here's the temperature in farenheit. ${tempf}\u00B0 F`
                wind.innerHTML = `The wind is blowing at ${windspeedalt}KPH.`
            } else {
                alttemp.innerHTML = `Here's the temperature in celsius. ${tempc}\u00B0 C`
                wind.innerHTML = `The wind is blowing at ${windspeed}MPH.`
            }

            if(rainch === 0 && snowch === 0){
                precip.innerHTML = `There's no chance of precipataion today.`
            } else if(rainch > 0 && snowch > 0){
                precip.innerHTML = `There's a ${rainch}% chance of rain, and a ${snowch}% chance of snow today.`
            } else if(rainch > 0 && snowch === 0){
                precip.innerHtml = `There's a ${rainch}% chance of rain today.`
            } else if(rainch === 0 && snowch > 0){
                precip.innerHTML = `There's a ${snowch}% chance of snow today.`
            }

            humid.innerHTML = `It's currently ${humidity}% humidity.`
})
})


