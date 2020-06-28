class Weather {
    constructor(city){
    this.api_key = '1183e1d2cf16460367ffa86b16e59a3b';
    this.city = city;
    }


   async getWeatherOpen(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.api_key}`);

        const data = await response.json();
         return data;
       
    }



    changeLocation(city){
        this.city = city;
    }
}