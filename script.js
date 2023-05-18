console.log('working')

let form = document.querySelector("#searchForm")
const apiKey = `ca28787d08144ced866180701231705`
const button = document.querySelector("#submitButton")


const getWeather = async (e) => {
    e.preventDefault() 

    const input = document.querySelector("#textInput").value
    console.log(input)

    let response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=no`

    )
    getTemp(response)
}

let getTemp = function(response) {
    console.log(response)
    let city = document.querySelector("#cityName")
    let tempText = document.querySelector("#temp")
    let feelText = document.querySelector("#feelTemp")

    city.innerHTML = response.data.location.name
    tempText.innerHTML = response.data.current.temp_f
    feelText.innerHTML = response.data.current.feelslike_f
    
 }

form.addEventListener('submit', getWeather)
