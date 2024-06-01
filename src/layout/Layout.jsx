import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import '../App.css'
import { AnimeContext } from '../context/Animecontext'
import { useContext } from 'react'

export default function Layout() {
  const { toggle } = useContext(AnimeContext)
 
  return (
    <div className='bg-dark text-white'>
   <Navbar />
   <div id='main-container' className='container mx-auto'> 
   <Outlet className={`${toggle}`}/>
   </div>
   <Footer/>

    </div>
  )
}
