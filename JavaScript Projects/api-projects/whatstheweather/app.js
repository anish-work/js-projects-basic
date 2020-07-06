
const storage = new Storage;
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);

// const autoComplete = new AutoComplete;


const ui = new UI;

document.addEventListener('DOMContentLoaded', getWeather)

document.getElementById('save').addEventListener('click', changeLocation)



function changeLocation(){
 
    const newCity = document.getElementById('w-city').value;
    weather.changeLocation(newCity);
    storage.setLocationData(newCity)

    getWeather();

    $('#w-changelocation').modal('hide')
} 




function getWeather(){
    weather.getWeatherOpen()
        .then(results => ui.paint(results))
        .catch(err => console.log(err))

    

}
