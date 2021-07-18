/* eslint linebreak-style: ["error", "windows"] */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  // Se inicializa el componente App
  useEffect(() => {
    // Llamo al endpoint https://restcountries.eu/rest/v2/all?fields=name
    const getPokemons = async () => {
      // Capturo los posibles errores con try/catch
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemons(response.data.results);
      } catch (err) {
        console.error('fallo axios', err);
      }
    };
    getPokemons();
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
      <p>
        Muestra algunos pokemon de la primera generacion.
        {' '}
        Link a la api:
        {' '}
        <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">https://pokeapi.co/</a>
      </p>
      <select name="select">
        {pokemons.map((pokemon) => (
          <option value={pokemon.name} key={pokemon.name}>{pokemon.name}</option>
        ))}
      </select>
    </div>

  );
};

export default Pokemon;
