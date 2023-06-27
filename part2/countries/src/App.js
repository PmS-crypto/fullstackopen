import { useState, useEffect } from 'react';
// import counrtiesData from './services/countries';
import axios from 'axios';

const App = () => {
  const [country, setCountry] = useState(''); 
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setCountry(e.target.value)
  }

  const displayCountry = () => {
    axios
    .get(`https://restcountries.com/v3.1/name/${country}/?fields=name,capital,currencies`)
    .then(response =>
        setResult(response.data[0]))
  }


  // useEffect(() => {
  //   if (country) {
  //     axios
  //   .get(`https://restcountries.com/v3.1/name/${country}/?fields=name,capital,currencies`)
  //   .then(response =>
  //       setResult(response)
  //     )
  //   }
  // })    

  return (
    <div className="App">
      find countries 
      <input value={country} onChange={handleChange}></input>
      <br />
      <button onClick={displayCountry}>Show the country details</button>
      <br />
      <br />
      {result.capital}
      <br/>
      {result.altSpellings[0]}
      {/* {result.name.common} */}
      {/* {(result!==null) ?
        <div>
        <p>The country you have entered is: {country} 
        <br />
        The details are as follows: {result.capital} </p>
        <br />
        <br />
        <h2>Country name: {result.name.common}</h2>
        <p>Currencies: </p>
        </div>  
      :
      <></>
      } */}
      
    </div>
  );
}

export default App;
