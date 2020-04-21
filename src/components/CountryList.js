import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../apis/corona';
const CountryList = ({ handleCountry }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setCountries]);
  return (
    <div className='ui form'>
      <div className='field'>
        <label className='ui center aligned header' htmlFor='countryList'>
          <h2>Country</h2>
        </label>
        <select
          onChange={(e) => handleCountry(e.target.value)}
          className='ui search dropdown'
        >
          <option value='global'>Global</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountryList;
