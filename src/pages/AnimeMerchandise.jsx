import React, { useState } from 'react';
import Footer from '../layout/Footer';
import '../App.css'

function AnimeMerchandise({ anime, addToCart, toggle }) {
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className='container mx-auto' id='merch'> 
      {anime ? (
        <div className="mt-5">
          <div id='add'>
          <h2 className="ml-3">{anime.title} {`Merchandise`} <i className="fas fa-circle-plus"></i></h2>
          </div>
          {anime.merchandise && anime.merchandise.length > 0 ? (
            <div className="row">
              {anime.merchandise.map((item) => (
                <div key={item.id} className="col-md-3 mb-4">
                <div className={`card ${toggle} d-flex flex-column h-100 overflow-hidden`}>
                    {imageLoading && (
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )}
                    <img
                      src={item.image}
                      alt={item.product_name}
                      className={`card-img-top img-fluid ${imageLoading ? 'd-none' : ''}`}
                      onLoad={handleImageLoad}
                    />
                    <div className="card-body">
                      <h3 className="card-title">{item.product_name}</h3>
                      <p className="card-text">{item.product_description}</p>
                      <p className="card-text">Price: ${item.price}</p>
                      <p className="card-text">In Stock: {item.inStock}</p>
                      <a href="#!" className="btn btn-success" onClick={() => addToCart(item)}>
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
                
              ))}
            </div>
          ) : (
            <p className="p-4 alert alert-warning">
              Oops :/ looks like there's no merchandise available for this anime.
            </p>
          )}
        </div>
      ) : (
        <p>Loading anime merchandise data...</p>
      )}
      <Footer />
    </div>
  );
}

export default AnimeMerchandise;
