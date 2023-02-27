import { useEffect, useState } from 'react';
import axios from 'axios';

const useContries = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return { countries };
};

export default useContries;
