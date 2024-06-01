import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Anime({ animes, deleteAnime, toggle }) {
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const navigate = useNavigate();

  function options(anime) {
    Swal.fire({
      title: "What changes are you making to this anime?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Update",
      denyButtonText: `Delete`
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/animelist/${anime.title}`);
      } else if (result.isDenied) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "gray",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            deleteAnime(anime.id);
            Swal.fire({
              title: "Deleted!",
              text: "The anime has been deleted.",
              icon: "success"
            });
          }
        });
      }
    });
  }

  return (
    <div className='mt-5'>
      <div className="row">
        {animes.map((anime, index) => (
          <div key={index} className="col-md-3 mt-3" id="picha">
            <div className="card">
              {imageLoading && (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
              <img src={anime.poster} className={`card-img-top img-fluid ${imageLoading ? 'd-none' : ''}`} alt="Loading..." onLoad={handleImageLoad} onClick={() => options(anime)} />
              <div className={`card-body pd-3 ${toggle}`}>
                <h5 className="card-title">{anime.title}</h5>
                <p className="card-text">Rating : {anime.rating}</p>
                <p className="card-text">Episodes : {anime.episodes}</p>
                <div className='buttons'>
                  <Link to={`/animemerch/${anime.id}`} className="btn btn-success">Shop</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}