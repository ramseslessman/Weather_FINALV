import React from 'react';
import { WeatherForm } from './WeatherForm';
import { WeatherItem } from './WeatherItem';

function Weather() {
  const [weather, setWeather] = React.useState(null);
  React.useEffect(() => {
    loadInfo();
  }, []);
  React.useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`;
  }, [weather]);
  let keyApp = 'aa5b3c260bee444c8d000803220806';
  const url = 'https://api.weatherapi.com/v1/current.json?';
  async function loadInfo(city = 'caracas') {
    try {
      const request = await fetch(`${url}key=${keyApp}&q=${city}&aqi=no`);
      const data = await request.json();
      setWeather(data);
      console.log(data);
    } catch (error) {}
  }
  const onChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };

  return (
    <div>
      <WeatherForm onChangeCity={onChangeCity} />
      <WeatherItem weather={weather} />
    </div>
  );
}
export { Weather };
