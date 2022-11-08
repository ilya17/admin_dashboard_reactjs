import { ForecastStore } from "@core/store/Forecast/Forecast";
import { Typography } from "@core/ui/Typography";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import {
  IconWrapperStyled,
  ImgStyled,
  LoaderWrapperStyled,
  TypographyNameStyled,
  TypographyTempStyled,
  WeatherWrapperStyled,
} from "./styled";

export const Weather = observer(() => {
  const { weatherForecast, getWeatherForecast } = ForecastStore;

  const weather = weatherForecast;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        getWeatherForecast(position.coords.latitude, position.coords.longitude);
      }
    );
  }, []);

  return (
    <WeatherWrapperStyled>
      {(weather.id && (
        <>
          <div>
            <TypographyNameStyled value={weather.name} />
            <TypographyTempStyled
              value={`${Math.trunc(weather.main.temp)} ℃`}
            />
          </div>
          <IconWrapperStyled>
            <ImgStyled
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt="weather icon"
            />
            <Typography
              value={
                weather.weather[0].description.charAt(0).toUpperCase() +
                weather.weather[0].description.slice(1)
              }
            />
          </IconWrapperStyled>
        </>
      )) || (
        <LoaderWrapperStyled>
          <Typography value="Загрузка данных..." />
        </LoaderWrapperStyled>
      )}
    </WeatherWrapperStyled>
  );
});
