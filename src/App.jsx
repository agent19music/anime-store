import {React, useState} from 'react';
import Animelist from './layout/Animelist.jsx'
import Merchlist from './components/Merchlist.jsx';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart.jsx';
import Contact from './pages/Contact.jsx';
import Addanimeform from './pages/Addanimeform.jsx';
import Feedback from './pages/Feedback.jsx';
import './App.css';
import Singleanime from './components/Singleanime.jsx';
import Layout from './layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Termsofservice from './pages/Termsofservice.jsx';
import DonatePage from './pages/Donate.jsx';
import AnimeProvider from './context/Animecontext.jsx';
import Navbar from './layout/Navbar.jsx';

function App() {
  const [isDarkmode, setIsDarkmode] = useState(true)

  const toggleDarkMode = () => {
    setIsDarkmode(!isDarkmode);
  };
  const toggle = isDarkmode ? ' bg-dark text-white' : 'bg-light text-black'
  const toggle2 = isDarkmode ? 'dark':'light';
  const toggle3 = isDarkmode ? 'white': 'black'


  return (
    <div className={toggle}>
      <AnimeProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Layout  /> } /> 
          <Route index element={<Home />} />
          <Route path="/animelist" element={<Animelist toggle={toggle} />} />
          <Route path="/cart" element={<Cart toggle={toggle} toggle2={toggle2} />} />
          <Route path="/contact" element={<Contact toggle={toggle} toggle3={toggle3}/>} />
          <Route path="/animemerch/:id" element={<Merchlist toggle={toggle} />} />
          <Route path="/addanimeform" element={<Addanimeform toggle={toggle} toggle3={toggle3}/>} />
          <Route path="/feedback" element={<Feedback toggle={toggle} />} />
          <Route path="/animelist/:title" element={<Singleanime  />} />
          <Route path="/termsofservice" element={<Termsofservice  toggle={toggle} toggle2={toggle2} toggle3={toggle3}/>} />
          <Route path="/donate" element={<DonatePage  />} />






        </Routes>
      </BrowserRouter>
      </AnimeProvider>
     
    </div>
  );
}

export default App;
