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
    // let location = [weather.location.name, weather.location.region, weather.location.country]
    // let current = [weather.current.temp_f, weather.current.humiditu, weather.current.cloud, weather.current.feelslike_f, weather.current.uv, weather.current.air_quality.pm2_5]
    let location = ['name', 'region', 'country']
    let current = ['temp_f', 'humidity', 'cloud', 'feelslike_f', 'uv']


    console.log(weather)

    // for (let prop of location) {
    //     console.log(prop)
    //     $('<h2>', {id: prop, html: prop + ': ' + weather.location[prop]}).appendTo($('#location'))
    // }



    for (let prop in weather.location) {
        console.log(prop, weather.location[prop])
        $('<h2>', {id: prop, html: prop + ': ' + weather.location[prop]}).appendTo($('#location'))
    }

    for (let prop in weather.current) {
        if (prop == 'air_quality') {
            $('<div>', {id: prop}).html(prop).appendTo($('#current'))
            $('<ul>').appendTo($('#' + prop))
            for (let air in weather.current.air_quality) {
                $('<li>', {id : air}).html(air + ': ' + weather.current.air_quality[air]).appendTo($('#' + prop + ' ul'))
            }
        } else if (prop == 'condition') {
            $('<img>', {id: 'icon', src: weather.current.condition.icon}).appendTo($('#current'))
        } else {
            console.log(prop, weather.current[prop])
            $('<p>', {id: prop}).html(prop + ': ' + weather.current[prop]).appendTo($('#current'))
        }
    }
})