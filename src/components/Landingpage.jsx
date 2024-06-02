import React from 'react';
import Footer from '../layout/Footer';
import { Link } from 'react-router-dom';

export default function Landingpage() {
  return (
    <div className='container text-center'>
      <div className='row justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='col-md-12'>
            <h5 className='pb-3'>WELCOME TO ANIME STORE !!</h5>
          <img src='https://cdn.wallpapersafari.com/99/21/kKEU2A.jpg' alt='loading...' className='img-fluid pb-2 rounded-md' />
          <div className="d-grid gap-2 pt-3">
               <Link className="btn btn-success " to='/animelist'type="button"> <i className="fas fa-circle-arrow-right"></i>   Dive in</Link>
              
          </div>
        </div>
       
      </div>
      <Footer/>
    </div>
  );
}
