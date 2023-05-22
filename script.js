console.log('working')
// Date
let currentDate = new Date();
let dateString = currentDate.toDateString();
document.getElementById("currentDate").innerHTML = dateString;

// Button
const button = document.querySelector('#submitButton')


button.addEventListener('click', async () => {
      // API Key
      const apiKey = '74272d54e57b4522bbf180559231705';
      // Text Input
      const textInput = document.querySelector('#textInput').value
      // City
      let cityName = document.querySelector('#cityName')
      // Temperature
      let temperature = document.querySelector('#temp')
      // Conditions
      let conditiions = document.querySelector('#conditions')
      // Conditions Icon
      let conditiionsIcon = document.querySelector('#conditionsIcon')
      // Humidity
      let humidity = document.querySelector('#humidity')
      // Wind Direction
      let windDirection = document.querySelector('#windDirection')

      // Getting Data
      let response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${textInput}&aqi=no`)
      console.log(response)
      

      // City
      cityName.innerHTML = `${response.data.location.name}, ${response.data.location.region}`
      // Temperature
      temperature.innerHTML = `Now ${response.data.current.temp_f}&deg;F`
      // Conditions
      conditiions.innerHTML = response.data.current.condition.text
      // Conditions Icon
      conditiionsIcon.src = response.data.current.condition.icon
      // Humidity
      humidity.innerHTML = `Humidity: ${response.data.current.humidity}`
      // Wind Direction
      windDirection.innerHTML = `Wind: ${response.data.current.wind_dir}`
      
      // let forecastResponse = await axios.get(`https://api.weatherapi.com/v1/future.json?key=${apiKey}&q=${textInput}&days=5aqi=no`)
      // console.log(forecastResponse)

})

    