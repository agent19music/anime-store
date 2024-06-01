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
  const[mycart, setMyCart] = useState([])
  const [animes, setAnimes] = useState([])
  const [feedback, setFeedback] = useState([])
  const [isDarkmode, setIsDarkmode] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://anime-store-db.onrender.com/animes')
        .then((res) => res.json())
        .then((res) => {
            setAnimes(res);
            setIsLoading(false); // Set loading to false after data is fetched
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            setIsLoading(false); // Ensure loading is set to false even if there's an error
        });
}, [animes]);

 
function addToCart(merchandise){
  if(!mycart.find((newguy)=> newguy.image===merchandise.image)){
   setMyCart([...mycart,merchandise]) 
   Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Item has been added to cart",
    showConfirmButton: false,
    timer: 900
  });
  }}

  function removeFromCart (merchandise){
   const newmycart = mycart.filter((newguy) => newguy.image !== merchandise.image);
   setMyCart(newmycart);
   Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Item has been removed from cart",
    showConfirmButton: false,
    timer: 900
  });
   
  }

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
      .then((response) => response.json())
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
  const toggleDarkMode = () => {
    setIsDarkmode(!isDarkmode);
  };
  const toggle = isDarkmode ? ' bg-dark text-white' : 'bg-light text-black'
  const toggle2 = isDarkmode ? 'dark':'light';
  const toggle3 = isDarkmode ? 'white': 'black'

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
