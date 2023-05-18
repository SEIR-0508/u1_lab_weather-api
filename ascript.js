//for the java script im goinf to try my best to recycle the same code i used for 
//the pokemon api hopefully that will save me alot of headache 
//review get requests and go over axios await 
const apiKey = "a175f79630e240a2bb7180508231705";
const button = document.querySelector("#submitButton");
const input = document.querySelector("#textInput");
const cityNameElement = document.querySelector("#cityName");
const tempElement = document.querySelector("#temp");
const weatherIconElement = document.querySelector("#weatherIcon");

button.addEventListener("click", fetchData);
//use async sunction to go through and grab the data 
async function fetchData() {
  const city = input.value.toLowerCase();
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
//the rest of this i retooled from my pokemon api if thats an issue i can redo another way

  try {
    const response = await axios.get(url);
    const data = response.data;

    const cityName = data.location.name;
    const region = data.location.region;
    const country = data.location.country;
    //i need to display the name of the city and state or country 
    cityNameElement.textContent = `${cityName}, ${region}, ${country}`;

    const tempInFarenheit = data.current.temp_f;
    tempElement.textContent = tempInFarenheit + "°F";

    const iconUrl = "https:" + data.current.condition.icon;
    const weatherIcon = document.createElement("img");
    weatherIcon.src = iconUrl;
    weatherIconElement.innerHTML = "";
    weatherIconElement.appendChild(weatherIcon);
  } catch (error) {
    cityNameElement.textContent = "Not a real city! :/";
    console.log(error);
  }
}
