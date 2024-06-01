import React, {useState} from 'react'
import Footer from '../layout/Footer';
import Swal from 'sweetalert2';

export default function Addanimeform({addAnime,toggle,toggle3}) {
    const [rating, setRating] = useState('');
    const [title, setTitle] = useState('');
    const [episodes, setEpisodes] = useState('');
    const [releasedate, setReleaseDate] = useState('');
    const [poster, setPoster] = useState('');


    const handleSubmit = (event) => {
      event.preventDefault();
      addAnime({ releasedate, rating, title, episodes,poster });
      setReleaseDate('');
      setRating('');
      setTitle('');
      setEpisodes('');
      setPoster('');
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Anime has been added successfully",
        showConfirmButton: false,
        timer: 900
      });

    };

    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-6'>
            <form onSubmit={handleSubmit} className={`${toggle} p-5 my-5`}>
              <div className="mb-3">
                <label htmlFor="releasedate" className={`form-label text-${toggle3}`}>Release Date:</label>
                <input
                  type="date"
                  value={releasedate}
                  onChange={event => setReleaseDate(event.target.value)}
                  id="releasedate"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className={`form-label text-${toggle3}`} >rating:</label>
                <input
                  type="number"
                  value={rating}
                  onChange={event => setRating(event.target.value)}
                  id="rating"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className={`form-label text-${toggle3}`}>Title:</label>
                <input
                  type="text"
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                  id="title"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="episodes" className={`form-label text-${toggle3}`}>Episodes:</label>
                <input
                  type="number"
                  value={episodes}
                  onChange={event => setEpisodes(event.target.value)}
                  id="episodes"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="poster" className={`form-label text-${toggle3}`}>Poster:</label>
                <input
                  type="text"
                  value={poster}
                  onChange={event => setPoster(event.target.value)}
                  id="poster"
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success btn  md-2">Add Anime</button>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
