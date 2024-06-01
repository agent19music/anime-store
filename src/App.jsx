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

  return (
    <div >
      <AnimeProvider>
      <BrowserRouter>
      <Navbar/>
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
