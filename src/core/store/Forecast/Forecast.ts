import { action, makeAutoObservable, observable } from "mobx";
import { WeatherData } from "./interfaces";

class Forecast {
  weatherForecast = {} as WeatherData;

  constructor() {
    makeAutoObservable(this, {
      weatherForecast: observable,

      getWeatherForecast: action,
    });
  }

  getWeatherForecast = (latitude: number, longitude: number) => {
    const apiKey = "fb68b17509dfb254f5afa43f6994a02a";
    const url = "https://api.openweathermap.org/data/2.5/weather";
    fetch(
      `${url}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=ru&units=metric`
    )
      .then((res) => res.json())
      .then((json: WeatherData) => {
        if (json) {
          this.weatherForecast = json;
        }
      });
  };
}

export const ForecastStore = new Forecast();
