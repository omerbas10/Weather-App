const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=1c019b799b1cc280a315a54bdcb683ae&query=' + latitude + ',' + longitude
    
    request({ url, json: true}, (error, { body}) => {
        if (error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined , body.current.weather_descriptions[0] + ". It is currently "+ body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress outside")
        }
    })
}

module.exports = forecast