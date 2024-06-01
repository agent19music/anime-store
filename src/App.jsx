import { useState, useContext } from 'react';
import Animelist from './layout/Animelist.jsx'
import Merchlist from './components/Merchlist.jsx';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart.jsx';
import Contact from './pages/Contact.jsx';
import Addanimeform from './pages/Addanimeform.jsx';
import Swal from 'sweetalert2';
import Feedback from './pages/Feedback.jsx';
import './App.css';
import Singleanime from './components/Singleanime.jsx';
import Layout from './layout/layout.jsx';
import Home from './pages/Home.jsx';
import Termsofservice from './pages/Termsofservice.jsx';
import DonatePage from './pages/Donate.jsx';
import AnimeProvider from './context/Animecontext.jsx';
import { AnimeContext } from './context/Animecontext.jsx';


function App() {
  const [feedback, setFeedback] = useState([])



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

  // const addAnime = (anime) => {
  //   fetch('https://anime-store-db.onrender.com/animes', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(anime),
  //   })
  //     .then((response) => response.{ mycart, removeFromCart,setMyCart, toggle2,toggle }json())
  //     .then((newAnime) => {
        
  //       setAnimes([...animes, newAnime]);
  //     })
  //     .catch((error) => {
  //       console.error('Error adding anime:', error);
  //     });
  // };
  

  
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


  return (
    <div >
      <AnimeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout /> } /> 
          <Route index element={<Home />} />
          <Route path="/animelist" element={<Animelist />} />
          <Route path="/cart" element={<Cart  />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/animemerch/:id" element={<Merchlist />} />
          <Route path="/addanimeform" element={<Addanimeform/>} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/animelist/:title" element={<Singleanime  />} />
          <Route path="/termsofservice" element={<Termsofservice  />} />
          <Route path="/donate" element={<DonatePage  />} />






        </Routes>
      </BrowserRouter>
      </AnimeProvider>
     
    </div>
  );
}

export default App;
