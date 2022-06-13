import React from 'react';

function WeatherForm(props) {
  const [city, setCity] = React.useState('');
  const [error, setError] = React.useState(true)

  const cityChange = (e) => {
    setCity(e.target.value);           
    
  };

  const citySubmit = (e) => {
    e.preventDefault();
    if (city.trim() !==''){
    props.onChangeCity(city);
    setCity('')
    setError(true)
    } 
    else{
      setError(false)
      setCity('')
    }
  };

  return (
    <div>
      <form onSubmit={citySubmit}>
        <input className="weatherForm" onChange={cityChange} value={city} placeholder="Enter City" />
      </form>
      {!error && <a className="error">ENTER CITY VALID  </a>}
    </div>
  );
}
export { WeatherForm };
