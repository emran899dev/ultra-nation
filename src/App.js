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
  return (
    <div className="App">
      <h1>Countries Loaded:{countries.length}</h1>
      
        {
          countries.map(country => <Country name={country.name}></Country>)
        }
       
    </div>

  )
}
export default App;
