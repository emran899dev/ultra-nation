import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))

  }, [])
  const handleAddCountry = (country) => {
    console.log('Country add ', country);
  }
  return (
    <div className="App">
      <h1>Countries Loaded:{countries.length}</h1>
      
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} ></Country>)
        }
       
    </div>

  )
}
export default App;
