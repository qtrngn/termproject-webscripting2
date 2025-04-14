import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState ('');
  const [error, setError] = useState ('');

  const fetchCharacters = (search = '') => {
    const url = `https://rickandmortyapi.com/api/character/?name=${search}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results);
        setError('');
      })
      .catch(err => {
        console.error(err);
        setCharacters([]);
        setError('No characters found.');
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);
  
  return (
    <div>
      <h1>Rick and Morty Wiki</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder='Search characters...'
      />
      <button onClick={() => fetchCharacters(query)}>Search</button>
      {error && <p>{error}</p>}
      <div className='character-grid'>
        {characters && characters.map (char => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}