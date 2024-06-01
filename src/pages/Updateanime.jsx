import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Footer from '../layout/Footer';

export default function Updateanime({anime}) {
  const [title, setTitle] = useState(anime.title);
  const [viewer_rating, setViewerRating] = useState(anime.rating);
  const [poster_url, setposterUrl] = useState(anime.poster);
  const [episode_count, setEpisodeCount] = useState(anime.episodes);

 
  function animesubmit(e) {
    e.preventDefault();
  
    fetch(`https://anime-store-db.onrender.com/animes/${anime.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title, rating: viewer_rating, poster: poster_url, episodes:episode_count})
    })
      .then((res) => res.json())
      .then((res) => {
  
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Anime updated successfully!',
          showConfirmButton: false,
          timer: 900,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'We have an error reaching our servers!',
        });
      });
  }
  
  

  return (
    <div className="container mt-5">
      <h4>UPDATE {anime.title}</h4>

      <div className="">
        <form onSubmit={animesubmit}>
          <div className="mb-3">
            <label className="form-label text-white">Title</label>
            <input
              type="text"
              value={title || anime.title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Rating</label>
            <input
              type="number"
              value={viewer_rating || anime.rating}
              onChange={(e) => setViewerRating(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Poster url</label>
            <input
              type="url"
              value={poster_url|| anime.poster}
              onChange={(e) => setposterUrl(e.target.value)}
              className="form-control"
              
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Episodes</label>
            <input
              type="number"
              value={episode_count||anime.episodes}
              onChange={(e) => setEpisodeCount(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-success">
            Update
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
