import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { saveFavorite } from "../data/storage";
import { Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .catch((err) => console.error(`Failed to fetch detail`, err));
  }, [id]);

  const [showMessage, setShowMessage] = useState(false);

  return character ? (
    <div className="container">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Location: {character.location.name}</p>
      <button
        onClick={() => {
          saveFavorite(character);
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 3000);
        }}
      >
        Save to Favorites
      </button>
      {showMessage && (
        <div className="message">✅ Saved to Favorites!</div>
      )}
      <p className="back-link">
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
