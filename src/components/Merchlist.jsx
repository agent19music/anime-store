import React, { useState, useEffect } from 'react';
import AnimeMerchandise from '../pages/AnimeMerchandise';
import { useParams } from 'react-router-dom';

export default function Merchlist({addToCart, removeFromCart, toggle}) {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    fetch(`https://anime-store-db.onrender.com/animes/${id}`)
      .then((res) => res.json())
      .then((data) => setAnime(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      {anime ? (
        <AnimeMerchandise anime={anime} addToCart={addToCart} removeFromCart={removeFromCart} toggle={toggle}/>
      ) : (
        <p>Loading anime merchandise data...</p>
      )}
    </div>
  );
}
