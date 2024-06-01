import React, { useState, useEffect } from 'react';
import Footer from '../layout/Footer'

export default function Feedback({toggle}) {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch('https://anime-store-db.onrender.com/reviews')
      .then((res) => res.json())
      .then((res) => setFeedback(res));
  }, []);

  return (
    <div className="container" id='feedback'>
      <div className="row mt-5">
        {feedback.map((feedback, index) => (
          <div key={index} className='col-md-3 mb-4'>
            <div className="card d-flex flex-column h-70">
              <div className={`card-body ${toggle} flex-grow-1`}>
                <h5 className="card-title pb-3">{feedback.name}</h5>
                <h6 className='card-text pb-2'>{feedback.email}</h6>
                <p className="card-text">{feedback.thoughts}</p>
                <p className="card-text">{feedback.rating} <span className='text-warning'>★</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
