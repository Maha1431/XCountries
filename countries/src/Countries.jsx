import React, { useEffect, useState } from 'react';
import  "./Countries.css";
import axios from 'axios';

function Countries()
{
    const [countries, setCountries] = useState([]);

    const fetchdata = async() => {
        try{
        let result = await axios.get('https://restcountries.com/v3.1/all');
       setCountries(result.data);
        }
        catch(e)
        {
            console.log("Error fetching data:", e);
        }
    }
    useEffect(() => {
    fetchdata();
    }, [])

  return(
    <div className="container">
    {countries.map((country, idx) => (
    <div className="card" key={idx}>
      <img src={country.flags.png} alt={`img of ${country.name.common}`}  className="img"/>
      <h2>{country.name.common}</h2>
    </div>
  ))}
  </div>
  );
}
export default Countries;