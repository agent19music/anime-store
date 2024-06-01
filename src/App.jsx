import { useState, useEffect } from 'react';
import Animelist from './layout/Animelist.js'
import Navbar from './layout/Navbar.js';
import Merchlist from './components/Merchlist.jsx';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart.js';
import Contact from './pages/Contact.js';
import Addanimeform from './pages/Addanimeform.js';
import Swal from 'sweetalert2';
import Feedback from './pages/Feedback.js';
import './App.css';
import Singleanime from './components/Singleanime.jsx';
import Layout from './layout/layout.js';
import Home from './pages/Home.js';
import Termsofservice from './pages/Termsofservice.js';
import DonatePage from './pages/Donate.js';
import AnimeProvider from './context/Animecontext.jsx';


function App() {
  const [feedback, setFeedback] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  

 




  const deleteAnime = (animeId) => {
    fetch(`https://anime-store-db.onrender.com/animes/${animeId}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedAnimes = animes.filter((anime) => anime.id !== animeId);
        setAnimes(updatedAnimes);
        Swal.fire('Anime deleted!', '', 'danger');
      })
      .catch((error) => {
        console.error('Error deleting anime:', error);
      });
  };

  const addAnime = (anime) => {
    fetch('https://anime-store-db.onrender.com/animes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(anime),
    })
      .then((response) => response.{ mycart, removeFromCart,setMyCart, toggle2,toggle }json())
      .then((newAnime) => {
        
        setAnimes([...animes, newAnime]);
      })
      .catch((error) => {
        console.error('Error adding anime:', error);
      });
  };
  

  
  const addFeedback = (comm) => {
    fetch('https://anime-store-db.onrender.com/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comm),
    })
      .then((response) => response.json())
      .then((newFeedback) => {
        
        setFeedback([...feedback, newFeedback]);
      })
      .catch((error) => {
        console.error('Error adding anime:', error);
      });
  };

  console.log(animes);

  return (
    <div className={toggle}>
      <AnimeProvider>
      <BrowserRouter>
        <Navbar mycart={mycart} toggleDarkMode={toggleDarkMode} toggle={toggle} toggle2={toggle2}/>
        <Routes>
          <Route path='/' element={<Layout /> } /> 
          <Route index element={<Home />} />
          <Route path="/animelist" element={<Animelist  deleteAnime={deleteAnime} toggle={toggle} isLoading={isLoading}/>} />
          <Route path="/cart" element={<Cart mycart={mycart} removeFromCart={removeFromCart} setMyCart={setMyCart} toggle2={toggle2} toggle={toggle} />} />
          <Route path="/contact" element={<Contact addFeedback={addFeedback} toggle={toggle} toggle3={toggle3}/>} />
          <Route path="/animemerch/:id" element={<Merchlist addToCart={addToCart} toggle={toggle} />} />
          <Route path="/addanimeform" element={<Addanimeform addAnime={addAnime} toggle={toggle} toggle3={toggle3}/>} />
          <Route path="/feedback" element={<Feedback toggle={toggle} />} />
          <Route path="/animelist/:title" element={<Singleanime  />} />
          <Route path="/termsofservice" element={<Termsofservice  toggle={toggle} toggle2={toggle2} toggle3={toggle3}  />} />
          <Route path="/donate" element={<DonatePage  toggle={toggle} toggle2={toggle2} toggle3={toggle3}  />} />






        </Routes>
      </BrowserRouter>
      </AnimeProvider>
     
    </div>
  );
}

export default App;
