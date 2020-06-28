class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feelslike');
        this.wind = document.getElementById('w-wind');
    }   


    paint(results) {

        this.location.textContent = `${results.name}, ${results.sys.country}`;

        this.desc.textContent = `${results.weather[0].main}`;
        
        this.string.textContent = `${results.main.temp}° C`;

        this.icon.setAttribute('src', 'http://openweathermap.org/img/wn/'+results.weather[0].icon+'@2x.png')

        this.humidity.textContent = `Relative Humidity :${results.main.humidity}`;

        this.feelsLike.textContent = `Feels Like:${results.main.feels_like}`;
        
        this.wind.textContent = `Wind Speed: ${results.wind.speed} m/s`;
    }
}