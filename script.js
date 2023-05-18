const apiKey = '3907162c2f004f66a25180609231705'
const button = document.querySelector('#submitButton')
const input = document.querySelector('#textInput')
const cityData = document.querySelector('#cityData')
const cityLocation = document.querySelector('#cityLocation')


button.addEventListener('click', async () => {
 let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=3907162c2f004f66a25180609231705&q=${input.value}`)
   console.log(response)


const weather = response.data.current
const location = response.data.location


const datElement = Object.keys(weather).map(prop => {
    return `<div>${prop}: ${weather[prop]}</div>`
})
   // let = datElement = `<div> Clouds = ${weather.cloud} ${weather.condition.text} ${weather.feelslike_c} ${weather.feelslike_f} ${weather.gust_kph} ${weather.gust_mph} ${weather.humidity} ${weather.is_day} ${weather.last_updated} ${weather.precip_in} ${weather.precip_mm} ${weather.pressure_in} ${weather.pressure_mb} ${weather.temp_c} ${weather.temp_f} ${weather.uv} ${weather.vis_km} ${weather.vis_miles} ${weather.wind_degree} ${weather.wind_dir} ${weather.wind_kph} ${weather.wind_mph}</div>`

    cityData.innerHTML = datElement.join('')

    const locElement = Object.keys(location).map(prop => {
        return `<div>${prop}: ${location[prop]}</div>`
    })
        cityLocation.innerHTML = locElement.join('')


    
    if (weather.feelslike_f >= 70 && weather.is_day === 1) {
        document.body.style.backgroundImage = "url('https://cloudfront-us-east-1.images.arcpublishing.com/gray/BNDJHAG4UNJBFD37OIQNNNO47I.jpg')"
        document.body.style.color = "black"
    } else if (weather.feelslike_f < 70 && weather.is_day === 1) {
        document.body.style.backgroundImage = "url('https://gratisography.com/wp-content/uploads/2022/05/gratisography-heavenly-free-stock-photo-1170x775.jpg')"
        document.body.style.color = "black"
    } else {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')"
        document.body.style.color = "white"
    }


})

input.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
    e.preventDefault()
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=3907162c2f004f66a25180609231705&q=${input.value}`)
      console.log(response)
   
   
   const weather = response.data.current
   const location = response.data.location
   
   
   const datElement = Object.keys(weather).map(prop => {
       return `<div>${prop}: ${weather[prop]}</div>`
   })
      // let = datElement = `<div> Clouds = ${weather.cloud} ${weather.condition.text} ${weather.feelslike_c} ${weather.feelslike_f} ${weather.gust_kph} ${weather.gust_mph} ${weather.humidity} ${weather.is_day} ${weather.last_updated} ${weather.precip_in} ${weather.precip_mm} ${weather.pressure_in} ${weather.pressure_mb} ${weather.temp_c} ${weather.temp_f} ${weather.uv} ${weather.vis_km} ${weather.vis_miles} ${weather.wind_degree} ${weather.wind_dir} ${weather.wind_kph} ${weather.wind_mph}</div>`
   
       cityData.innerHTML = datElement.join('')
   
       const locElement = Object.keys(location).map(prop => {
           return `<div>${prop}: ${location[prop]}</div>`
       })
           cityLocation.innerHTML = locElement.join('')
   
   
       
       if (weather.feelslike_f >= 70 && weather.is_day === 1) {
           document.body.style.backgroundImage = "url('https://cloudfront-us-east-1.images.arcpublishing.com/gray/BNDJHAG4UNJBFD37OIQNNNO47I.jpg')"
           document.body.style.color = "black"
       } else if (weather.feelslike_f < 70 && weather.is_day === 1) {
           document.body.style.backgroundImage = "url('https://gratisography.com/wp-content/uploads/2022/05/gratisography-heavenly-free-stock-photo-1170x775.jpg')"
           document.body.style.color = "black"
       } else {
           document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')"
           document.body.style.color = "white"
       }
   
    }
   })
   
