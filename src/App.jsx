/* eslint no-trailing-spaces: "error" */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';

const App = () => {
  const [paises, setPaises] = useState([]);

  // Se inicializa el componente App
  useEffect(() => {
    // Llamo al endpoint https://restcountries.eu/rest/v2/all?fields=name
    const getPaises = async () => {
      // Capturo los posibles errores con try/catch
      try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all?fields=name');
        setPaises(response.data);
      } catch (err) {
        console.error('fallo axios', err);
      }
    };
    getPaises();
  }, []);

  return (
    <div>
      <h1>Paises</h1>
      <select name="select">
        {paises.map((pais) => (
          <option value={pais.name} key={pais.name}>{pais.name}</option>
        ))}
      </select>
      <Pokemon />
    </div>

  );
};

export default App;
