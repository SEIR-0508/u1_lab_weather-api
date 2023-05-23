// declare api key to a variable named apiKey
const apiKey= "a3bb8b354bf24255bf1180932231705"

// declare variables for the input bar, search button, and the elements that will hold weather text and picture
const inputBar = document.querySelector('#inputBar')
const button = document.querySelector("#searchButton")
const weatherText = document.querySelector("#weather-text")
const weatherPicture = document.querySelector("#weather-picture")
const weatherTemp = document.querySelector("#weather-temp")

// add an event listener for the button element, that when you click it,
// it will grab the value of the inputBar (the text in the search bar)
// and then send a request to the weather API with our apiKey and value inserted as object literals
// the response from the api server is then stored in a variable declared as 'response'
button.addEventListener('click', async () => {
  console.log('button click is working')

  let value = inputBar.value
  console.log(value)

  const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}`)
  console.log(response)
  let weatherResult = response.data.current.condition.text

  // Access the innerText property of the H2 element #weather-text, and replace it with the weatherResult
  weatherText.innerText = weatherResult 

  // Declare a variable pictureResult that accesses the icon property from the API response (that holds a link to an image)
  let pictureResult = response.data.current.condition.icon
  weatherPicture.src = pictureResult

  let tempResult = response.data.current.temp_f
  weatherTemp.innerText = tempResult
})

// Object literals
// how to insert a variable into a string
// use backticks for the string and then ${variableNameHere} to insert variable









//old code 
// // const city;
// axios.get(' http://api.weatherapi.com/v1').then((response)=>{
//     console.log(response.data)
// })

// // const getTemp = async () => {
// //     const locaTemp= await axios.get(`http://api.openweathermap.org/data/2.5/weather`)
// //     console.log(locaTemp.data)
    
// // }
// // getTemp()


// button.addEventListener('click', async()=> {
//     console.log('button click is working')
//     const textInput= document.querySelector('#inputBar').value
//     let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather${textInput}`)
//     console.log(response)
//     // let tempPic = response.
//     picture.src = tempPic
// })

