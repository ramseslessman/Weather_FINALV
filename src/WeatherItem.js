import React from 'react';

function WeatherItem({ weather }) {
  return (
    <div>
      <div className="header">
        <h2> {weather?.location.name} </h2>
        <h2> {weather?.location.country}</h2>
      </div>




      <div className="infoTemp">
          <h1 className="temp"> {weather?.current.temp_c}</h1>
      <div className="tempSimbol">
          <a className="°c">°C</a>
          <img className="imgTemp" src="https://res.cloudinary.com/dweblzsm6/image/upload/v1654871169/temp.png_vrd6kh.png" />  
      </div> 
      </div>  
      
          
        <div className="infoClim">
          <img className="icon" src={`https:${weather?.current.condition.icon}`} />
          <h3>{weather?.current.condition.text}</h3>
        </div>






      <div className="infoSecundary">
       <div className="humidity" alt="Humidity">
          <img className="imgHumidity" src="https://res.cloudinary.com/dweblzsm6/image/upload/v1654871291/humedad_.png_locois.png" />
          <h3> {weather?.current.humidity}%</h3>
        </div>
        <div className="feelSlike">
          <img className="imgFeelSlike" src="https://res.cloudinary.com/dweblzsm6/image/upload/v1654871316/sensaciontermica.png_ttqvwm.png" />
          <h3> {weather?.current.feelslike_c}°C</h3>
        </div>
        <div className="wind">
          <img className="imgWind" src="https://res.cloudinary.com/dweblzsm6/image/upload/v1654871121/windkmh_vnucdf.png" />
          <h3> {weather?.current.wind_kph} Km/h</h3>
        </div>
      </div>
      <div>
        <iframe
          className="map"
          title="map"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31398.882130496313!2d${weather?.location.lon}8!3d${weather?.location.lat}1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1654744954972!5m2!1ses!2sve`}
          width="400"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
export { WeatherItem };
