import React, { useState, useCallback } from 'react';
import './App.css';
import SearchCity from './components/SearchCity';
import WeatherData from './components/WeatherData';

const App = () => {
  const [city, setCity] = useState('Uzhhorod');
  const handleSearch = useCallback(newCity => {
    setCity(newCity)
  }, [])
  return (
    <div className="App">
      <header className="App-header">Wheather app</header>
      <SearchCity handleSearch={handleSearch} />
      <WeatherData city={city}/>
    </div>
  );
}

export default App;
