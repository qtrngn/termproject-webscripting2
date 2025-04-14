import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterCard({ character }) {
  return (
    <div className='character-card'>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <Link to={`/character/${character.id}`}>View Details</Link>
    </div>
  )
}

