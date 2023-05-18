console.log(`working`)
//initialized variables
const apiKey = `10072b800a1940dface180526231705` 
const button = document.querySelector(`#submitButton`)
const tempElement = document.querySelector(`#temp`)
const responseElement = document.querySelector(`#response`)
//const location = document.querySelector(`cityName`)

button.addEventListener('click', async () => {
    let searchInput = document.querySelector('input').value
    let response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchInput}`)
    console.log(response.data)
 
    let city = response.data.location.name;
    let temperature = response.data.current.temp_c;

    tempElement.textContent = `Temperature: ${temperature}°C`;
    responseElement.textContent = `City: ${city}`;

})