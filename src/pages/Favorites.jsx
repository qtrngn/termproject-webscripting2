import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getFavorites, removeFavorite } from "../data/storage";
import CharacterCard from "../components/CharacterCard";


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
    <div className="container">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites saved.</p>
      ) : (
        favorites.map((fav) => (
          <div key={fav.id}>
            <CharacterCard character={fav} />
            <button onClick={() => handleRemove(fav.id)}>Remove</button>
            <p className="back-link">
              <Link to="/">← Back to Home</Link>
            </p>
          </div>
        ))
      )}
    </div>
  );
}
