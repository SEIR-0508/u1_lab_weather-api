const apiKey = '4a2c7ffe72f24d3b8fa180646231705'

$('#submitButton').on('click', async () => {
    $('#location').html('')
    $('#current').html('')
    const input = $('#textInput').val()
    const weatherRes = await axios.get('https://api.weatherapi.com/v1/current.json', {
        params: { 
            key: apiKey,
            q: input,
            aqi: 'yes'
        }
    })
    let weather = weatherRes.data
    let location = ['name', 'region', 'country', 'localtime']
    let locationDis = ['Name', 'Region', 'Country', 'Local Time']
    let current = ['temp_f', 'precip_in', 'humidity', 'wind_mph', 'vis_miles', 'pressure_in', 'feelslike_f', 'uv']
    let currentDis = ['Temperature', 'Precipitation', 'Humidity', 'Wind', 'Visibility', 'Air Pressure', 'Feeks Like', 'UV Index']
    let currentUnit = ['˚F', '%', '%', ' mph', ' mi', ' inHg', '˚F', '']

    console.log(weather)

    for (let prop of location) {
        console.log(prop, weather.location[prop])
        let index = location.indexOf(prop)
        $('<h3>', {id: prop, html: locationDis[index] + ': ' + weather.location[prop]}).appendTo($('#location'))
        
    }

    console.log(weather.current.condition.icon)
    $('<img>', {id: 'icon', src: weather.current.condition.icon}).appendTo($('#current'))
    $('<p>', {id: 'condition', html: 'Condition: ' + weather.current.condition.text}).appendTo($('#current'))

    for (let prop of current) {
        console.log(prop)
        let index = current.indexOf(prop)
        $('<p>', {id: prop, html: currentDis[index] + ': ' + weather.current[prop] + currentUnit[index]}).appendTo($('#current'))
    }

    $('<p>', {id: 'pm2_5', html: 'PM 2.5: ' + Math.floor(weather.current.air_quality.pm2_5) + ' μg/m3'}).appendTo($('#current'))
})