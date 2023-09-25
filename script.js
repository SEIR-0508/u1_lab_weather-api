// let button = document.querySelector("#submitButton");
  let cityName = document.querySelector("#cityName");
        let temp = document.querySelector("#temp");
        const apiKey = "b8f5b39b5f0e4583bf4145837232009"
        const button = document.querySelector("#submitButton")
        const input = document.querySelector("#textInput")

    input.addEventListener('keydown', async (event) => {
        // let cityName = document.querySelector("#cityName");
        // let temp = document.querySelector("#temp");
        // const apiKey = "b8f5b39b5f0e4583bf4145837232009"
        // const button = document.querySelector("#submitButton")
        // // const input = document.querySelector("#textInput").value

if (event.key==="Enter" || event.keyCode===13){
        let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value}&aqi=no`);
            let weatherData= response.data

    
        cityName.textContent = weatherData.location.name
        temp.textContent = weatherData.current.temp_f

        let temperature = weatherData.current.temp_f; 
        temp.textContent = `Temperature: ${temperature}°F`

        let humidityValue = weatherData.current.humidity;
        humidity.textContent = `Humidity: ${humidityValue}%`

       
        let windSpeed = weatherData.current.wind_mph;
        wind.textContent = `Wind Speed: ${windSpeed} mph`

  
        let iconURL = weatherData.current.condition.icon
        weatherIcon.src = iconURL       
}
    }
)