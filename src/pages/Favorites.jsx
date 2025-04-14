import React, { useState, useEffect } from 'react'
import { getFavorites, removeFavorite } from '../data/storage';
import CharacterCard from '../components/CharacterCard';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (id) => {
    removeFavorite(id);
    setFavorites(getFavorites());
  };

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites saved.</p>
      ):(
        favorites.map(fav =>  (
          <div key={fav.id}>
            <CharacterCard character={fav} />
            <button onClick = {() => handleRemove(fav.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}