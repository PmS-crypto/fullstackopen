import { useState, useEffect } from 'react';
import axios from 'axios';
import counrtiesData from './services/countries';

const App = () => {
  const [country, setCountry] = useState(''); 
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setCountry(e.target.value)
  }

  useEffect(() => {
    counrtiesData
    .getAll()
    .then(response =>
        setResult(response)
      )
  },[])    

 

  return (
    <div className="App">
      find countries 
      <input value={country} onChange={handleChange}></input>
      <br />
      <button>Show the country details</button>
      <br />
      <br />

      The country you have entered is: {country}
      <br />
      The details are as follows: 
      <br />
      <br />
      <h2>Country name: </h2>
      {result.map(p=> p.name)}
    </div>
  );
}

export default App;
