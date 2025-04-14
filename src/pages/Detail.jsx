import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { saveFavorite } from '../data/storage';

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(data => setCharacter(data))
    .catch(err => console.error(`Failed to fetch detail`, err));
  }, [id]);

  return character ? (
    <div className='container'>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Location: {character.location.name}</p>
      <button onClick={() => saveFavorite(character)}>Save to Favorites</button>
    </div>
  ): <p>Loading...</p>;
}