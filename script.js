const apiKey = 'f077ca18cb3345b6b9a180743231705';
const button = document.querySelector('#submitButton');
const textInput = document.querySelector('#textInput');
let city = document.querySelector("#cityName");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let humidity = document.querySelector("#humidity");
let weatherIcon = document.querySelector("#weatherIcon");
let error = document.querySelector("#error");

button.addEventListener("click", async () => {
    let inputValue = textInput.value;

    try {
        let response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputValue}&aqi=no`
        );
        
        city.innerText = `City: ${response.data.location.name}`;
        temp.innerText = `Temperature: ${response.data.current.temp_f} F`;
        wind.innerText = `Wind: ${response.data.current.wind_mph} mph`;
        humidity.innerText = `Humidity: ${response.data.current.humidity}%`;
        weatherIcon.src = response.data.current.condition.icon;
        error.innerText = "";  // Clear any previous error message
    } catch(err) {
        error.innerText = "Sorry, we couldn't find that city. Please try again.";
    }
});
